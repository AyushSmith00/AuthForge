import rateLimit from "express-rate-limit";

export const loginLimitter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: {message: "Too many login attempts try again after 15minutes"},
    standardHeaders: true,
    legacyHeaders: false,
})

export const refreshLimitter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: {message: "Too many refresh attempts. Slow down"},
})

export const adminLimitter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 10,
    message: {message: "Too many admin requests. Slow down."},
})