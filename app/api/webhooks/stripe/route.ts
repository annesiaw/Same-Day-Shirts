import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { prisma } from '@/lib/prisma';
import { OrderStatus, Prisma } from '@prisma/client';
import Logo from '@/components/Logo';

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get('stripe-signature');

  if (!signature || !process.env.STRIPE_WEBHOOK_SECRET) {
    return new NextResponse('Missing signature or webhook secret', { status: 400 });
  }

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object;

      // Find the order with this payment intent
      const order = await prisma.order.findFirst({
        where: {
          paymentIntent: paymentIntent.id,
        } as Prisma.OrderWhereInput,
      });

      if (!order) {
        return new NextResponse('Order not found', { status: 404 });
      }

      // Update order status to PAID
      await prisma.order.update({
        where: {
          id: order.id,
        } as Prisma.OrderWhereUniqueInput,
        data: {
          status: OrderStatus.PAID,
        } as Prisma.OrderUpdateInput,
      });
    }

    return new NextResponse('Webhook processed', { status: 200 });
  } catch (err) {
    console.error('Error processing webhook:', err);
    return new NextResponse('Webhook error', { status: 400 });
  }
} 