
CREATE SCHEMA `injmusic-bd`;

CREATE TABLE IF NOT EXISTS `injmusic-bd`.`funcao` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `nome` varchar(50) NOT NULL,
    PRIMARY KEY(`id`)
) 
ENGINE = InnoDB AUTO_INCREMENT = 1 
DEFAULT CHARSET = utf8mb4
COLLATE = utf8mb4_general_ci;

INSERT INTO `injmusic-bd`.`funcao` (`id`, `nome`) VALUES
(1, 'Vocal Lead'),
(2, 'Back Vocal'),
(3, 'Violonista'),
(4, 'Tecladista'),
(5, 'Baixista'),
(6, 'Baterista'),
(7, 'Guitarrista');


CREATE TABLE IF NOT EXISTS `injmusic-bd`.`material` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `nome` varchar(50) NOT NULL,
    PRIMARY KEY(`id`)
) 
ENGINE = InnoDB AUTO_INCREMENT = 1 
DEFAULT CHARSET = utf8mb4 
COLLATE = utf8mb4_general_ci;

INSERT INTO `injmusic-bd`.`material` (`nome`) VALUES
('Encordoamento de Violão'),
('Baquetas'),
('Cabo de microfone 5m'),
('Pele Bumbo Bateria');

CREATE TABLE IF NOT EXISTS `injmusic-bd`.`musica`(
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `nome` varchar(60) DEFAULT NULL,
    `interpreteOriginal` varchar(60) DEFAULT NULL,
    `interpreteVersao` varchar(60) DEFAULT NULL,
    `tomM` varchar(5) DEFAULT NULL,
    `tomF` varchar(5) DEFAULT NULL,
    `tomOriginal` varchar(5) DEFAULT NULL,
    `linkYouTube` varchar(45) DEFAULT NULL,
    `linkSpotify` varchar(45) DEFAULT NULL,
    `cifra` varchar(1000) DEFAULT NULL,
    `bpm` varchar(3) DEFAULT NULL,
    PRIMARY KEY(`id`)
) 
ENGINE = InnoDB AUTO_INCREMENT = 1 
DEFAULT CHARSET = utf8mb4 
COLLATE = utf8mb4_general_ci;


INSERT INTO `injmusic-bd`.`musica` (`nome`, `interpreteOriginal`, `interpreteVersao`, `tomM`, `tomF`, `tomOriginal`, `linkYouTube`, `linkSpotify`, `cifra`, `bpm` ) VALUES
('Teu Toque', 'GABI SAMPAIO', 'GABI SAMPAIO', 'D', 'Bb', 'Bb', 'https://www.youtube.com/watch?v=i1Tz2jny2mw', 'https://open.spotify.com/track/4joufqWt6hm8LU', 'Como eu amo os momentos que eu passo contigo', '124'),
('Pela Fé', 'Ademar de Campos', 'Ademar de Campos', 'C', 'F', 'C', 'https://www.youtube.com/watch?v=TV_DOd8Q97Y', 'https://open.spotify.com/track/3EK2tx2yq44WVS', 'Pela fé no filho de Deus sou vencedor Todo mal afasta de mim Cristo Senhor  Tudo posso em Jesus Meu fiel e bom pastor Digno é de receber todo louvor', '166'),
('Lion and the Lamb', 'Leeland', 'Leeland', 'A', 'D', 'A', 'https://www.youtube.com/watch?v=q1SXPODm0uE', 'https://open.spotify.com/track/2nn89bqsJMqX9p', 'Hes coming on the clouds, Kings and kingdoms will bow down', '122');

CREATE TABLE IF NOT EXISTS `injmusic-bd`.`integrante`(
    `cpf` varchar(11) NOT NULL,
    `nome` varchar(200) DEFAULT NULL,
    `endereco` varchar(200) DEFAULT NULL,
    `bairro` varchar(100) DEFAULT NULL,
    `cidade` varchar(50) DEFAULT NULL,
    `uf` varchar(2) DEFAULT NULL,
    `telefone` varchar(11) DEFAULT NULL,
    `email` varchar(150) DEFAULT NULL,
    `funcaoid` int(11) NOT NULL,
    PRIMARY KEY(`cpf`),
    FOREIGN KEY (`funcaoid`) REFERENCES `funcao`(`id`)
) 
ENGINE = InnoDB AUTO_INCREMENT = 1 
DEFAULT CHARSET = utf8mb4 
COLLATE = utf8mb4_general_ci;

INSERT INTO `injmusic-bd`.`integrante` (`cpf`, `nome`, `endereco`, `bairro`, `cidade`, `uf`, `telefone`, `email`, `funcaoid`) VALUES
('36374800850', 'Lilyan Gonçalves', 'Floris do Prado, 100', 'Ana Jacinta', 'Presidente Prudente', 'SP', '18996179838', 'lilyangoncalves@gmail.com','1');
