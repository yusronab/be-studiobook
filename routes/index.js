import express from "express";
import { getStudio, getStudioById, createStudio, updateStudio, deleteStudio } from "../controllers/StudioModel.js";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken, authorizeRole } from "../middleware/VerifyToken.js";
import { createPemesanan, getPemesanan, getPemesananById, updatePemesanan, deletePemesanan, getBookingsForStudio,getPemesananByUserId } from "../controllers/PemesananController.js";
import { getPembayaran, getPembayaranById, createPembayaran, updatePembayaran, deletePembayaran, createPayment,getNotification,cancelPembayaran } from "../controllers/PembayaranController.js";
// import { refreshToken } from "../controller/RefreshToken.js";
import controllers from "../controllers/api/index.js";
import { onError, onLost } from "../controllers/api/main.js";

const router = express.Router();

// verifyToken, authorizeRole("OWNER")
// route studio
router.get("/studio", getStudio);
router.get("/studio/:id", getStudioById);
router.post("/studio", createStudio);
router.patch("/studio/:id", updateStudio);
router.delete("/studio/:id", deleteStudio);

// route user
router.get("/users", getUsers);
router.post("/users", Register);
router.post("/login", Login);
// router.get("/token", refreshToken);
router.delete("/logout", Logout);

// route pemesanan
router.post("/pemesanan", createPemesanan);
router.get("/pemesanan", getPemesanan);
router.get("/pemesanan/:id", getPemesananById);
router.put("/pemesanan/:id", updatePemesanan);
router.delete("/pemesanan/:id", deletePemesanan);
router.post("/pembayaran/cancel/:id", cancelPembayaran); 

//route pembayaran
router.get("/pembayaran", getPembayaran);
router.get("/pembayaran/:id", getPembayaranById);
router.post("/pembayaran", createPembayaran);
router.put("/pembayaran/:id", updatePembayaran);
router.delete("/pembayaran/:id", deletePembayaran);

router.get('/pemesanan/studio/:studioId', getBookingsForStudio);

// api payment gateway
router.post("/api/trancation", createPayment);
router.post("/api/notification", getNotification);

// Tambahkan rute untuk mendapatkan riwayat pemesanan berdasarkan userId
router.get("/pemesanan/user/:userId", getPemesananByUserId);

router.get("/api/errors", () => {
    throw new Error(
        "The Industrial Revolution and its consequences have been a disaster for the human race."
    );
});
router.use(onLost);
router.use(onError);

export default router;
