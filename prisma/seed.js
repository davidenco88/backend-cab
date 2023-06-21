"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt_1 = require("../src/auth/utils/bcrypt");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        //Create default roles
        yield prisma.rol.createMany({
            data: [{ name: 'Admin' }, { name: 'Client' }, { name: 'Driver' }],
            skipDuplicates: true,
        });
        //Create three diferents user for three diferent roles
        const defaultPasword = '12345';
        const hashedPassword_1 = yield (0, bcrypt_1.hashPassword)(defaultPasword);
        const hashedPassword_2 = yield (0, bcrypt_1.hashPassword)(defaultPasword);
        const hashedPassword_3 = yield (0, bcrypt_1.hashPassword)(defaultPasword);
        yield prisma.users.createMany({
            data: [
                {
                    name: 'David',
                    lastname: 'Sarria',
                    email: 'david@mkir.com',
                    avatar: 'empty',
                    password: hashedPassword_1,
                },
                {
                    name: 'Federico',
                    lastname: 'Cordoba',
                    email: 'federico@mkir.com',
                    avatar: 'empty',
                    password: hashedPassword_2,
                },
                {
                    name: 'Andres',
                    lastname: 'Lopez',
                    email: 'andres@mkir.com',
                    avatar: 'empty',
                    password: hashedPassword_3,
                },
            ],
            skipDuplicates: true,
        });
        yield prisma.userByRole.createMany({
            data: [
                { usersId: 1, rolId: 1 },
                { usersId: 2, rolId: 2 },
                { usersId: 3, rolId: 3 },
            ],
            skipDuplicates: true,
        });
        yield prisma.vehicleTypes.createMany({
            data: [
                { name: "Vehiculo epacioso", seats: 5, luggage: "25 lts", isActive: true },
                { name: "Vehiculo de lujo", seats: 3, luggage: "25 lts", isActive: true },
                { name: "Vehiculo economico", seats: 4, luggage: "10 lts", isActive: true },
            ],
            skipDuplicates: true,
        });
        yield prisma.serviceType.createMany({
            data: [
                { vehicleTypesId: 1, feeBase: 120 },
                { vehicleTypesId: 2, feeBase: 150 },
                { vehicleTypesId: 3, feeBase: 80 },
            ],
            skipDuplicates: true,
        });
        yield prisma.vehicles.createMany({
            data: [
                {
                    name: 'Vehiculo generico 1',
                    driverID: 3,
                    vehicleTypeID: 1,
                    plates: '1235486',
                    isAvailable: true,
                    isActive: true,
                },
                {
                    name: 'Vehiculo generico 2',
                    driverID: 3,
                    vehicleTypeID: 2,
                    plates: '987456',
                    isAvailable: true,
                    isActive: true,
                },
                {
                    name: 'Vehiculo generico 3',
                    driverID: 3,
                    vehicleTypeID: 3,
                    plates: '192846',
                    isAvailable: true,
                    isActive: true,
                },
            ],
            skipDuplicates: true,
        });
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () { return console.log('Seed successful'); }))
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () { return yield prisma.$disconnect; }));
