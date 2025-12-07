import dbConnect from "../lib/dbConnect";
import User from "../models/User";
import { hashPassword } from "../lib/hash";

import { CATEGORIES } from "./data/categories";
import { CONTRACTOR_SERVICES } from "./data/services";
import { COVERAGE_REGIONS } from "./data/regions";

async function run() {
  await dbConnect();

  console.log("🌱 Starting seed process...\n");

  // 1. Create ADMIN user
  const adminEmail = process.env.ADMIN_EMAIL || "admin@therailexchange.com";
  const adminPass = process.env.ADMIN_PASSWORD || "Admin123!";

  if (!adminEmail || !adminPass) {
    throw new Error("Admin credentials missing in .env");
  }

  const adminExists = await User.findOne({ email: adminEmail });

  if (!adminExists) {
    await User.create({
      email: adminEmail,
      password: await hashPassword(adminPass),
      role: "admin",
      name: "System Administrator",
      emailVerified: true,
      subscriptionStatus: "active",
    });
    console.log("✅ Admin user created");
  } else {
    console.log("ℹ️  Admin user already exists");
  }

  // 2. Display available categories
  console.log("\n📦 Available Categories:");
  CATEGORIES.forEach((cat) => console.log(`   - ${cat}`));

  // 3. Display contractor services
  console.log("\n🔧 Contractor Services:");
  CONTRACTOR_SERVICES.forEach((service) => console.log(`   - ${service}`));

  // 4. Display coverage regions
  console.log("\n🗺️  Coverage Regions:");
  COVERAGE_REGIONS.forEach((region) => console.log(`   - ${region}`));

  console.log("\n🎉 Seed completed successfully!\n");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("📧 Admin Credentials:");
  console.log(`   Email: ${adminEmail}`);
  console.log(`   Password: ${adminPass}`);
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

  process.exit(0);
}

run().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
