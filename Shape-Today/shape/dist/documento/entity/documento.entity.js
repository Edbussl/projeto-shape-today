"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Documento = void 0;
const typeorm_1 = require("typeorm");
const palavra_chave_entity_1 = require("./palavra-chave.entity");
const projeto_documento_user_entity_1 = require("./projeto_documento_user.entity");
let Documento = class Documento {
};
exports.Documento = Documento;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Documento.prototype, "id_documento", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Documento.prototype, "anoPublicacao", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Documento.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Documento.prototype, "discente", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Documento.prototype, "orientador", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Documento.prototype, "resumo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => palavra_chave_entity_1.PalavraChave, palavraChave => palavraChave.documento),
    __metadata("design:type", Array)
], Documento.prototype, "palavrasChave", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => projeto_documento_user_entity_1.ProjetoDocumentoUser, pd => pd.documento),
    __metadata("design:type", Array)
], Documento.prototype, "projetoDocumentoUsers", void 0);
exports.Documento = Documento = __decorate([
    (0, typeorm_1.Entity)('documento')
], Documento);
//# sourceMappingURL=documento.entity.js.map