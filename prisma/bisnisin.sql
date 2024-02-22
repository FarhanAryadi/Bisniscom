-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "brand" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "countInStock" INTEGER NOT NULL DEFAULT 0,
    "description" TEXT NOT NULL,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "banner" TEXT,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "firtName" TEXT NOT NULL DEFAULT 'John Doe',
ADD COLUMN     "lastName" TEXT NOT NULL DEFAULT 'Martua Holong';

-- DropIndex
DROP INDEX "User_email_key";


-- Insert into Product
INSERT INTO "Product" ("createdAt", "updatedAt", "name", "slug", "category", "image", "price", "brand", "rating", "countInStock", "description", "isFeatured", "banner")
VALUES (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Free shirt', 'free-shirt', 'Shirts', '/images/adele-30.jpeg', 70, 'Nike', 4.5, 20, 'You can pass "limit" and "skip" params to limit and skip the results for pagination, and use limit=0 to get all items.', false, 'null'),
(CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Fit shirt', 'fit-shirt', 'Shirts', '/images/fourtwnty-lelaku.jpg', 80, 'Adidas', 3.2, 20, 'You can pass "select" as query params with comma-separated values to select specific data.', false, 'null'),;
(CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Slim Shirt', 'slim-shirt', 'Shirts', '/images/manusia-tulus.jpg', 90, 'Raymond', 4.5, 20, 'A popular shirt with a slim fit style and a classic collar design for a modern look and feel. Made with 100% cotton. Available in a variety of colors and sizes. Machine washable.', true, 'null'),
(CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Golf Pants', 'golf-pants', 'Pants', '/images/arcticmonkeys-fwn.jpg', 90, 'Oliver', 2.9, 20, 'It will simulate a DELETE request and will return deleted product with "isDeleted" & "deletedOn" keys', true, 'null'),
(CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Fit Pants', 'fit-pants', 'Pants', '/images/mantra-mantra-kuntoaji.jpg', 95, 'Zara', 3.5, 20, 'DummyJSON can be used with any type of front end project that needs products, carts, users, todos or any dummy data in JSON format.', false, 'null'),
(CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Classic Pants', 'classic-pants', 'Pants', '/images/riuh-febyputri.jpeg', 75, 'Casely', 2.4, 20, ' All the resources can be used with query params to achieve pagination and get limited data. limit=0 clears the limit and you get all items.', false, 'null'),
(CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Sport Shirt', 'sport-shirt', 'Shirts', '/images/bom-feast.jpg', 100, 'Uniqlo', 4.7, 24, 'Use this example to alternatively allow users to authenticate using their social media accounts such as with Google, Apple, GitHub or Twitter.', false, 'null'),
(CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Women Shirt', 'women-shirt', 'Shirts', '/images/happierthanever-billieeilish.jpeg', 88, 'Billie', 4.9, 12, 'CloudConvert converts your image files online. Amongst many others, we support PNG, JPG, GIF, WEBP and HEIC. You can use the options to control image resolution, quality and file size.', false, 'null');



-- Insert into User
INSERT INTO "User" ("createdAt", "updatedAt", "name", "firtName", "lastName", "email", "password", "isAdmin")
VALUES (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Admin', 'Super', 'Admin', 'admin@example.com', '1234567', true),
(CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'John', 'John Doe', 'Martua Holong', 'user@example.com', '1234567', false),
(CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Dahlan', 'Dahlan Da', 'Benda', 'dahlan@gmail.com', '1234567', false),
(CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Murxhid', 'Murxhid', 'Kartanto', 'murxhid@gmail.com', '1234567', false),

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
