-- CreateTable
CREATE TABLE "booking" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "booking_date" DATE NOT NULL,
    "expected_delivery_date" DATE NOT NULL,
    "cargo_id" UUID NOT NULL,
    "shipping_agent_id" UUID NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "business_administrator" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "admin_name" VARCHAR(255) NOT NULL,
    "admin_contact" VARCHAR(255) NOT NULL,
    "user_id" UUID NOT NULL,
    "organization_id" UUID NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "business_administrator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cargo" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "cargo_name" VARCHAR(255) NOT NULL,
    "cargo_weight" INTEGER NOT NULL,
    "cargo_volume" INTEGER NOT NULL,
    "cargo_type" VARCHAR(255) NOT NULL,
    "organization_id" UUID NOT NULL,
    "driver_id" UUID NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cargo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "driver" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "license_number" VARCHAR(255) NOT NULL,
    "vehicle_type" VARCHAR(255) NOT NULL,
    "vehicle_capacity" INTEGER NOT NULL,
    "user_id" UUID NOT NULL,
    "organization_id" UUID NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "organization" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "description" VARCHAR(255),
    "name" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" UUID NOT NULL,
    "tenant_id" VARCHAR(255) NOT NULL,

    CONSTRAINT "organization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "email" VARCHAR(255) NOT NULL,
    "firstName" VARCHAR(255),
    "lastName" VARCHAR(255),
    "roq_user_id" VARCHAR(255) NOT NULL,
    "tenant_id" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "booking" ADD CONSTRAINT "booking_cargo_id_fkey" FOREIGN KEY ("cargo_id") REFERENCES "cargo"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "booking" ADD CONSTRAINT "booking_shipping_agent_id_fkey" FOREIGN KEY ("shipping_agent_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "business_administrator" ADD CONSTRAINT "business_administrator_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organization"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "business_administrator" ADD CONSTRAINT "business_administrator_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cargo" ADD CONSTRAINT "cargo_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cargo" ADD CONSTRAINT "cargo_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organization"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "driver" ADD CONSTRAINT "driver_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organization"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "driver" ADD CONSTRAINT "driver_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "organization" ADD CONSTRAINT "organization_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

