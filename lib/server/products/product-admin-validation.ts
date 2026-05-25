import { ProductStatus, ProductType } from "@/lib/generated/prisma/client";
import { z } from "zod";
import { PAYMENT_LANGUAGE_CODES } from "@/lib/payment.constants";

export const createProductSchema = z.object({
  name: z.string().trim().min(1).max(200),
  description: z.string().trim().max(5000).optional(),
  priceAmd: z.coerce.number().positive().max(99_999_999),
  type: z.enum([ProductType.ONE_TIME, ProductType.PERMANENT]),
});

export const updateProductSchema = z.object({
  name: z.string().trim().min(1).max(200).optional(),
  description: z.string().trim().max(5000).nullable().optional(),
  priceAmd: z.coerce.number().positive().max(99_999_999).optional(),
  type: z.enum([ProductType.ONE_TIME, ProductType.PERMANENT]).optional(),
  status: z.enum([ProductStatus.ACTIVE, ProductStatus.INACTIVE, ProductStatus.SOLD]).optional(),
});

export const startOrderBodySchema = z.object({
  customerName: z.string().trim().min(1).max(200),
  customerEmail: z.email().max(254),
  customerPhone: z.string().trim().min(5).max(40),
  language: z.enum(PAYMENT_LANGUAGE_CODES).optional(),
});
