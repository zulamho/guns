const { Router } = require("express");
const { weaponController } = require("../controllers/weapon.controller");

const router = Router();

router.post("/addWeapon", weaponController.addWeapon);
router.get("/weapons", weaponController.getWeapons);
router.get("/weapons/:id", weaponController.getWeapon);
router.delete("/weapons/:id", weaponController.deleteWeapon);
router.patch("/weapons/:id", weaponController.editWeapon);

module.exports = router;
