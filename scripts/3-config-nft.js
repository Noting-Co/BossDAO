import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xccfA0eA346773CE326CCc174f66842A9f6cADA01"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Milk for Boss Baby",
        description: "This NFT will give you access to BossDAO!",
        image: readFileSync("scripts/assets/milk.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
