-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema camisetapi
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema camisetapi
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `camisetapi` DEFAULT CHARACTER SET utf8 ;
USE `camisetapi` ;

-- -----------------------------------------------------
-- Table `camisetapi`.`plataformas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `camisetapi`.`plataformas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `console` VARCHAR(150) NOT NULL,
  `marca` VARCHAR(150) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `camisetapi`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `camisetapi`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `login` VARCHAR(45) NULL,
  `senha` VARCHAR(45) NULL,
  `nome` VARCHAR(45) NULL,
  `nascimento` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idusuarios_UNIQUE` (`id` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `camisetapi`.`anuncios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `camisetapi`.`anuncios` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `ano` YEAR NOT NULL,
  `descricao` VARCHAR(1500) NOT NULL,
  `nome` VARCHAR(150) NOT NULL,
  `tempo_uso` VARCHAR(45) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `usuarios_id` INT NOT NULL,
  `plataformas_id` INT NOT NULL,
  `condicao` ENUM('NOVO', 'USADO', 'LACRADO') NOT NULL,
  `chat_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idEndereco_UNIQUE` (`id` ASC) ,
  INDEX `fk_anuncios_usuarios_idx` (`usuarios_id` ASC) ,
  INDEX `fk_anuncios_plataformas1_idx` (`plataformas_id` ASC) ,
  CONSTRAINT `fk_anuncios_plataformas1`
    FOREIGN KEY (`plataformas_id`)
    REFERENCES `camisetapi`.`plataformas` (`id`),
  CONSTRAINT `fk_anuncios_usuarios`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `camisetapi`.`usuarios` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `camisetapi`.`anuncios_favoritos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `camisetapi`.`anuncios_favoritos` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `lista_favoritos_id` BIGINT NOT NULL,
  `anuncios_id` BIGINT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `usuarios_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_anuncios_favoritos_anuncios1_idx` (`anuncios_id` ASC) ,
  INDEX `fk_anuncios_favoritos_usuarios1_idx` (`usuarios_id` ASC) ,
  CONSTRAINT `fk_anuncios_favoritos_anuncios1`
    FOREIGN KEY (`anuncios_id`)
    REFERENCES `camisetapi`.`anuncios` (`id`),
  CONSTRAINT `fk_anuncios_favoritos_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `camisetapi`.`usuarios` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `camisetapi`.`generos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `camisetapi`.`generos` (
  `id` BIGINT NOT NULL,
  `nome` VARCHAR(150) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `camisetapi`.`anuncios_generos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `camisetapi`.`anuncios_generos` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `anuncios_id` BIGINT NOT NULL,
  `generos_id` BIGINT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_anuncios_generos_anuncios1_idx` (`anuncios_id` ASC) ,
  INDEX `fk_anuncios_generos_generos1_idx` (`generos_id` ASC) ,
  CONSTRAINT `fk_anuncios_generos_anuncios1`
    FOREIGN KEY (`anuncios_id`)
    REFERENCES `camisetapi`.`anuncios` (`id`),
  CONSTRAINT `fk_anuncios_generos_generos1`
    FOREIGN KEY (`generos_id`)
    REFERENCES `camisetapi`.`generos` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `camisetapi`.`chats`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `camisetapi`.`chats` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(45) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `usuarios_id` INT NOT NULL,
  `usuarios_id1` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_chats_usuarios1_idx` (`usuarios_id` ASC) ,
  INDEX `fk_chats_usuarios2_idx` (`usuarios_id1` ASC) ,
  CONSTRAINT `fk_chats_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `camisetapi`.`usuarios` (`id`),
  CONSTRAINT `fk_chats_usuarios2`
    FOREIGN KEY (`usuarios_id1`)
    REFERENCES `camisetapi`.`usuarios` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `camisetapi`.`imagens`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `camisetapi`.`imagens` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `anuncios_id` BIGINT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `foto_principal` TINYINT(1) NOT NULL DEFAULT '0',
  `caminho` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_imagens_anuncios1_idx` (`anuncios_id` ASC) ,
  CONSTRAINT `fk_imagens_anuncios1`
    FOREIGN KEY (`anuncios_id`)
    REFERENCES `camisetapi`.`anuncios` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `camisetapi`.`mensagens`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `camisetapi`.`mensagens` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `usuarios_id` INT NOT NULL,
  `chat_id` BIGINT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `conteudo` VARCHAR(250) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_mensagens_usuarios1_idx` (`usuarios_id` ASC) ,
  INDEX `fk_mensagens_chat1_idx` (`chat_id` ASC) ,
  CONSTRAINT `fk_mensagens_chat1`
    FOREIGN KEY (`chat_id`)
    REFERENCES `camisetapi`.`chats` (`id`),
  CONSTRAINT `fk_mensagens_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `camisetapi`.`usuarios` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `camisetapi`.`trocas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `camisetapi`.`trocas` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `data` DATETIME NOT NULL,
  `avaliacao` VARCHAR(200) NOT NULL,
  `anuncios_id` BIGINT NOT NULL,
  `usuarios_id` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `usuarios_id2` INT NOT NULL,
  `chat_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_trocas_anuncios1_idx` (`anuncios_id` ASC) ,
  INDEX `fk_trocas_usuarios1_idx` (`usuarios_id` ASC) ,
  INDEX `fk_trocas_usuarios2_idx` (`usuarios_id2` ASC) ,
  CONSTRAINT `fk_trocas_anuncios1`
    FOREIGN KEY (`anuncios_id`)
    REFERENCES `camisetapi`.`anuncios` (`id`),
  CONSTRAINT `fk_trocas_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `camisetapi`.`usuarios` (`id`),
  CONSTRAINT `fk_trocas_usuarios2`
    FOREIGN KEY (`usuarios_id2`)
    REFERENCES `camisetapi`.`usuarios` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `camisetapi`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `camisetapi`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `login` VARCHAR(45) NULL,
  `senha` VARCHAR(45) NULL,
  `nome` VARCHAR(45) NULL,
  `nascimento` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idusuarios_UNIQUE` (`id` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `camisetapi`.`Categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `camisetapi`.`Categoria` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `camisetapi`.`Produtos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `camisetapi`.`Produtos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  `preco` VARCHAR(45) NULL,
  `tamanho` VARCHAR(45) NULL,
  `genero` VARCHAR(45) NULL,
  `id_categoria` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Produtos_Categoria1_idx` (`id_categoria` ASC) ,
  CONSTRAINT `fk_Produtos_Categoria1`
    FOREIGN KEY (`id_categoria`)
    REFERENCES `camisetapi`.`Categoria` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `camisetapi`.`FormaPagamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `camisetapi`.`FormaPagamento` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `camisetapi`.`Compras`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `camisetapi`.`Compras` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_usuarios` INT NOT NULL,
  `id_produtos` INT NOT NULL,
  `id_formapagamento` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Compras_usuarios1_idx` (`id_usuarios` ASC) ,
  INDEX `fk_Compras_Produtos1_idx` (`id_produtos` ASC) ,
  INDEX `fk_Compras_FormaPagamento1_idx` (`id_formapagamento` ASC) ,
  CONSTRAINT `fk_Compras_usuarios1`
    FOREIGN KEY (`id_usuarios`)
    REFERENCES `camisetapi`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Compras_Produtos1`
    FOREIGN KEY (`id_produtos`)
    REFERENCES `camisetapi`.`Produtos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Compras_FormaPagamento1`
    FOREIGN KEY (`id_formapagamento`)
    REFERENCES `camisetapi`.`FormaPagamento` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `camisetapi`.`cartoes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `camisetapi`.`cartoes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `numero` VARCHAR(45) NULL,
  `validade` VARCHAR(45) NULL,
  `codigo_seguranca` VARCHAR(45) NULL,
  `id_usuario` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cartoes_usuarios1_idx` (`id_usuario` ASC) ,
  CONSTRAINT `fk_cartoes_usuarios1`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `camisetapi`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
