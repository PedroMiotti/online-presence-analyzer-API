-- MySQL Script generated by MySQL Workbench
-- seg 04 out 2021 23:01:34
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema scrape_tool
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema scrape_tool
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `scrape_tool` DEFAULT CHARACTER SET utf8 ;
USE `scrape_tool` ;

-- -----------------------------------------------------
-- Table `scrape_tool`.`empresa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `scrape_tool`.`empresa` (
  `empresa_id` INT NOT NULL,
  `empresa_nome` VARCHAR(45) NULL,
  PRIMARY KEY (`empresa_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `scrape_tool`.`reclameaqui`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `scrape_tool`.`reclameaqui` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `empresa_id` INT NULL,
  `reputacao_geral` VARCHAR(45) NULL,
  `reclamacoes_total` VARCHAR(45) NULL,
  `respondidas_total` VARCHAR(45) NULL,
  `porcentagem_resp` VARCHAR(45) NULL,
  `nota` VARCHAR(45) NULL,
  `n_respondidas` VARCHAR(45) NULL,
  `avaliadas` VARCHAR(45) NULL,
  `updated` TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


INSERT INTO scrape_tool.empresa (empresa_id, empresa_nome) VALUES(1, "PicPay");
INSERT INTO scrape_tool.empresa (empresa_id, empresa_nome) VALUES(2, "Ifood");
INSERT INTO scrape_tool.empresa (empresa_id, empresa_nome) VALUES(3, "Correios");
INSERT INTO scrape_tool.empresa (empresa_id, empresa_nome) VALUES(4, "Magazine Luiza");
INSERT INTO scrape_tool.empresa (empresa_id, empresa_nome) VALUES(5, "Nubank");
INSERT INTO scrape_tool.empresa (empresa_id, empresa_nome) VALUES(6, "Mercado Livre");