CREATE TABLE IF NOT EXISTS `camisetapi`.`cartoes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `numero` VARCHAR(45) NULL,
  `validade` VARCHAR(45) NULL,
  `codigo_seguranca` VARCHAR(45) NULL,
  `id_usuario` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cartoes_usuarios1_idx` (`id_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_cartoes_usuarios1`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `mydb`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB