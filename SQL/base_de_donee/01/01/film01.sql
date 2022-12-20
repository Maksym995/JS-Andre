-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Mer 03 Février 2016 à 14:52
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

--
-- Contenu de la table `film`
--

INSERT INTO `film` (`film_id`, `film_titre`, `film_anneeproduction`, `film_genre`, `film_titreoriginal`) VALUES
(1158, 'Les Couronnes', 1909, 'Court métrage', ''),
(1159, 'Johns', 1997, 'Comédie dramatique', ''),
(1161, 'Les Joyeux Microbes', 1909, 'Court métrage', ''),
(1162, 'Le Petit Cheval bossu', 1979, 'Animation', 'Koniok Garbounock'),
(1163, 'Jobard change de bonne', 1911, 'Court métrage', ''),
(1164, 'Christine', 1983, 'Fantastique', ''),
(1165, 'Tchao pantin', 1983, 'Policier, Drame', ''),
(1166, 'Les Douze Travaux d''Hercule', 1910, 'Court métrage', ''),
(1167, 'Le Binettoscope', 1910, 'Non référencé', ''),
(1168, 'Les Copains d''abord', 1983, 'Comédie dramatique', 'The Big chill'),
(1169, 'Les Locataires d''a cote', 1909, 'Court métrage', ''),
(1170, 'La Chatte sur un toit brûlant', 1958, 'Drame', 'Cat on a Hot Tin Roof'),
(1171, 'Target', 1985, 'Policier', ''),
(1172, 'L''Honneur des Prizzi', 1985, 'Policier', 'Prizzi''s Honor'),
(1174, 'Jack le magnifique', 1979, 'Comédie dramatique', 'Saint Jack'),
(1175, 'Paroles et Musique', 1984, 'Comédie dramatique', ''),
(1177, 'Porcelaines tendres', 1909, 'Court métrage', ''),
(1178, 'Un Drame chez les fantoches', 1908, 'Court métrage', 'Un drame chez les fantoches'),
(1179, 'L''Oiseau bleu', 1976, 'Comédie', 'The Blue bird'),
(1180, 'Les Sept Disciples de Shaolin', 1981, 'Arts Martiaux', ''),
(1181, 'Keep your Mouth Shut', 1944, 'Court métrage', ''),
(1182, 'Baisers volés', 1968, 'Comédie, Romance', ''),
(1183, 'L''espion qui m''aimait', 1977, 'Aventure', 'The Spy Who Loved Me'),
(1184, '1... 2... 3...', 1984, 'Court métrage', ''),
(1185, 'Gwen le livre de sable', 1984, 'Animation', ''),
(1186, 'Paris 1900', 1946, 'Documentaire', ''),
(1188, 'En route vers le sud', 1978, 'Western, Comédie', 'Goin'' South'),
(1189, 'La Dernière Corvée', 1974, 'Comédie dramatique', 'The Last Detail'),
(1190, 'Les Chiens de guerre', 1980, 'Aventure, Guerre', 'The Dogs of War'),
(1191, 'Cléo de 5 à 7', 1962, 'Drame', ''),
(1193, 'Voyage au centre de la Terre', 1959, 'Aventure, Science fiction', 'Journey to the Centre of the Earth'),
(1195, 'Trois femmes', 1977, 'Drame', '3 Women'),
(1196, 'Un couple parfait', 1979, 'Comédie, Romance', 'A Different Story'),
(1198, 'La Lettre écarlate', 1972, 'Drame', 'Der Scharlachrote Buchstabe'),
(1199, 'Les dieux sont encore tombes sur la tete', 1988, 'Comédie', ''),
(1200, 'San Mao, le petit vagabond', 1949, 'Comédie', 'San Mao, Liuglangji'),
(1201, 'Escale à Hollywood', 1945, 'Comédie musicale', 'Anchors Aweigh'),
(1202, 'Ivan le Terrible', 1977, 'Musical', ''),
(1203, 'Tchaïkovski', 1970, 'Musical', 'Tchaikovski'),
(1204, 'Katerina Ismailova', 1966, 'Musical', ''),
(1205, 'La Khovantchina', 1959, 'Musical', ''),
(1206, 'Don Juan ou le Convive de pierre', 1966, 'Musical', ''),
(1207, 'Boris Godounov', 1954, 'Musical', ''),
(1208, 'La Fiancee du tsar', 1964, 'Musical', ''),
(1209, 'La Dame de Pique', 1960, 'Musical', ''),
(1210, 'La Nouvelle Babylone', 1929, 'Historique, Drame', 'Novyy Vavilon'),
(1211, 'Masculin, féminin', 1966, 'Comédie dramatique', ''),
(1213, 'Sans Soleil', 1982, 'Documentaire', ''),
(1214, 'La Drôlesse', 1978, 'Comédie dramatique', ''),
(1215, 'Dans les rues', 1933, 'Comédie dramatique', ''),
(1216, 'Paris nous appartient', 1958, 'Drame', ''),
(1217, 'L''Empire de la passion', 1978, 'Drame', 'Ai no borei'),
(1218, 'Dragées au poivre', 1963, 'Comédie', ''),
(1219, 'Mort sur le Grill', 1984, 'Policier, Comédie', 'Crimewave'),
(1220, 'Peur bleue', 1985, 'Epouvante-horreur', 'Silver Bullet'),
(1221, 'A couteau tiré', 1983, 'Policier', 'Cop Killer'),
(1223, 'Ivan le Terrible', 1944, 'Historique, Biopic, Drame', 'Ivan Grozny'),
(1224, 'Garo', 1965, 'Non référencé', ''),
(1225, 'Safarbalek', 1967, 'Comédie dramatique', ''),
(1227, 'La Machine a parler d''amour', 1961, 'Comédie dramatique', ''),
(1228, 'La Nuit venue', 1996, 'Documentaire', ''),
(1229, 'Le Mandat', 1968, 'Drame', 'Mandabi'),
(1230, 'Stryker', 1983, 'Fantastique', ''),
(1231, 'Hsiao chuan yi chao', 1980, 'Arts Martiaux', ''),
(1232, 'Blacula, le vampire noir', 1972, 'Epouvante-horreur', 'Blacula'),
(1233, 'Duel sur le Mississippi', 1955, 'Aventure', ''),
(1234, 'Une Femme cherche son destin', 1942, 'Comédie dramatique', 'Now, Voyager'),
(1235, 'La Vallée de la peur', 1947, 'Western', 'Pursued'),
(1237, 'Kramer contre Kramer', 1978, 'Drame', 'Kramer vs. Kramer'),
(1238, 'La Mort aux encheres', 1982, 'Drame', 'Still of the Night'),
(1239, 'L''Homme de la rue', 1941, 'Comédie dramatique', 'Meet John Doe'),
(1240, 'Domicile conjugal', 1970, 'Comédie dramatique', ''),
(1241, 'If Only', 1998, 'Comédie', 'The Man With Rain in his Shoes'),
(1242, 'Secret d''expeditions isolees dans la profondeur du souvenir', 1987, 'Court métrage', ''),
(1243, 'La Cité des femmes', 1979, 'Comédie dramatique', 'La Città delle donne'),
(1244, 'Viridiana', 1961, 'Drame', ''),
(1245, 'Amarcord', 1974, 'Comédie dramatique', ''),
(1246, 'Voyage a Melonia', 1991, 'Animation', ''),
(1247, 'Ombres et brouillard', 1992, 'Comédie dramatique', 'Shadows and Fog'),
(1248, 'Don Giovanni', 1979, 'Musical', ''),
(1249, 'Simone Barbès ou la Vertu', 1980, 'Comédie dramatique', ''),
(1250, 'Le Jour se lève', 1939, 'Drame', ''),
(1251, 'Les Quatre Nuits d''un reveur', 1971, 'Comédie dramatique', ''),
(1253, 'Trop tot, trop tard', 1980, 'Historique', ''),
(1254, 'Anatomie d''un rapport', 1975, 'Comédie dramatique', ''),
(1255, 'Ginger et Fred', 1985, 'Comédie dramatique', 'Ginger e Fred'),
(1257, 'Lady Lou', 1933, 'Comédie', 'She Done Him Wrong'),
(1258, 'Les Freres Karamazov', 1957, 'Drame', ''),
(1259, 'Princes noirs de Saint-Germain-des-Pres', 1975, 'Court métrage', ''),
(1260, 'Woyzeck', 1992, 'Drame', ''),
(1261, 'Aniki bobo', 1942, 'Drame', ''),
(1262, 'Pour la suite du monde', 1963, 'Documentaire', ''),
(1263, 'Les Roses magiques', 1906, 'Court métrage', ''),
(1264, 'Vampire, vous avez dit vampire ?', 1985, 'Epouvante-horreur, Fantastique', 'Fright Night'),
(1265, 'Francisca', 1981, 'Drame', ''),
(1266, 'Amour de perdition', 1978, 'Drame', 'Amor de perdicao'),
(1267, 'Tristana', 1969, 'Drame', ''),
(1268, 'Les Raisins de la colère', 1940, 'Drame', 'The Grapes of Wrath'),
(1269, 'La Soupe au canard', 1933, 'Comédie, Comédie musicale', 'Duck Soup'),
(1270, 'Le Prince de New York', 1981, 'Policier, Drame', 'Prince of the City');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
