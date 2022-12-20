-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Mer 03 Février 2016 à 15:20
-- Version du serveur: 5.6.12-log
-- Version de PHP: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `cinema`
--
CREATE DATABASE IF NOT EXISTS `cinema01` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `cinema01`;

-- --------------------------------------------------------

--
-- Structure de la table `artiste`
--

DROP TABLE IF EXISTS `artiste`;
CREATE TABLE IF NOT EXISTS `artiste` (
  `art_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT 'identifiant automatique',
  `art_nom` varchar(255) NOT NULL COMMENT 'nom et prénom de l''artiste',
  PRIMARY KEY (`art_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=213057 ;

-- --------------------------------------------------------

--
-- Structure de la table `film`
--

DROP TABLE IF EXISTS `film`;
CREATE TABLE IF NOT EXISTS `film` (
  `film_id` bigint(20) unsigned NOT NULL COMMENT 'identifiant issu de AlloCiné',
  `film_titre` varchar(255) NOT NULL COMMENT 'titre',
  `film_anneeproduction` int(11) DEFAULT NULL COMMENT 'année de production',
  `film_genre` varchar(255) DEFAULT NULL,
  `film_titreoriginal` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`film_id`),
  KEY `film_titre` (`film_titre`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `film_artiste`
--

DROP TABLE IF EXISTS `film_artiste`;
CREATE TABLE IF NOT EXISTS `film_artiste` (
  `filmart_film_id` bigint(20) unsigned NOT NULL COMMENT 'clé étrangère pour le film',
  `filmart_artiste_id` bigint(20) unsigned NOT NULL COMMENT 'Clé étrangère pour l''artiste',
  `filmart_type` varchar(255) NOT NULL COMMENT 'type de participation : acteur, réalisateur, etc.',
  PRIMARY KEY (`filmart_film_id`,`filmart_artiste_id`,`filmart_type`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COMMENT='Lien entre un film et les artistes (acteurs, réalisateurs, e';

-- --------------------------------------------------------

--
-- Structure de la table `nationalite`
--

DROP TABLE IF EXISTS `nationalite`;
CREATE TABLE IF NOT EXISTS `nationalite` (
  `nat_film_id` bigint(20) unsigned NOT NULL,
  `nat_pays` varchar(255) NOT NULL,
  PRIMARY KEY (`nat_film_id`,`nat_pays`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
