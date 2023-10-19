DROP SCHEMA IF EXISTS `injmusic-bd`;

CREATE SCHEMA `injmusic-bd`;

CREATE TABLE IF NOT EXISTS `injmusic-bd`.`funcao` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `nome` varchar(50) NOT NULL,
    PRIMARY KEY(`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

INSERT INTO
    `injmusic-bd`.`funcao` (`id`, `nome`)
VALUES
    (1, 'Vocal Lead'),
    (2, 'Back Vocal'),
    (3, 'Violonista'),
    (4, 'Tecladista'),
    (5, 'Baixista'),
    (6, 'Baterista'),
    (7, 'Guitarrista');

CREATE TABLE IF NOT EXISTS `injmusic-bd`.`categoria_material` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`id`)
);

INSERT INTO
    `injmusic-bd`.`categoria_material` (`id`, `nome`)
VALUES
    (1, 'Bateria'),
    (2, 'Cabos'),
    (3, 'Instrumento de corda');

CREATE TABLE IF NOT EXISTS `injmusic-bd`.`material` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `nome` varchar(50) NOT NULL,
    PRIMARY KEY(`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

ALTER TABLE
    `injmusic-bd`.`material`
ADD
    COLUMN `idcategoria` INT NULL
AFTER
    `nome`,
ADD
    INDEX `idcategoria_idx` (`idcategoria` ASC) VISIBLE;

;

ALTER TABLE
    `injmusic-bd`.`material`
ADD
    CONSTRAINT `idcategoria` FOREIGN KEY (`idcategoria`) REFERENCES `injmusic-bd`.`categoria_material` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

INSERT INTO
    `injmusic-bd`.`material` (`nome`, `idcategoria`)
VALUES
    ('Encordoamento de Violão', 3),
    ('Baquetas', 1),
    ('Cabo de microfone 5m', 2),
    ('Pele Bumbo Bateria', 1);

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
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

INSERT INTO
    `injmusic-bd`.`musica` (
        `nome`,
        `interpreteOriginal`,
        `interpreteVersao`,
        `tomM`,
        `tomF`,
        `tomOriginal`,
        `linkYouTube`,
        `linkSpotify`,
        `cifra`,
        `bpm`
    )
VALUES
    (
        'Teu Toque',
        'GABI SAMPAIO',
        'GABI SAMPAIO',
        'D',
        'Bb',
        'Bb',
        'https://www.youtube.com/watch?v=i1Tz2jny2mw',
        'https://open.spotify.com/track/4joufqWt6hm8LU',
        'Como eu amo os momentos que eu passo contigo',
        '124'
    ),
    (
        'Pela Fé',
        'Ademar de Campos',
        'Ademar de Campos',
        'C',
        'F',
        'C',
        'https://www.youtube.com/watch?v=TV_DOd8Q97Y',
        'https://open.spotify.com/track/3EK2tx2yq44WVS',
        'Pela fé no filho de Deus sou vencedor Todo mal afasta de mim Cristo Senhor  Tudo posso em Jesus Meu fiel e bom pastor Digno é de receber todo louvor',
        '166'
    ),
    (
        'Lion and the Lamb',
        'Leeland',
        'Leeland',
        'A',
        'D',
        'A',
        'https://www.youtube.com/watch?v=q1SXPODm0uE',
        'https://open.spotify.com/track/2nn89bqsJMqX9p',
        'Hes coming on the clouds, Kings and kingdoms will bow down',
        '122'
    );

CREATE TABLE IF NOT EXISTS `injmusic-bd`.`integrante`(
    `cpf` varchar(11) NOT NULL,
    `nome` varchar(200) DEFAULT NULL,
    `endereco` varchar(200) DEFAULT NULL,
    `bairro` varchar(100) DEFAULT NULL,
    `cidade` varchar(50) DEFAULT NULL,
    `uf` varchar(2) DEFAULT NULL,
    `telefone` varchar(11) DEFAULT NULL,
    `email` varchar(150) DEFAULT NULL,
    `funcaoid` int(11) DEFAULT NULL,
    `hash_password` VARCHAR(200) NOT NULL,
    PRIMARY KEY(`cpf`),
    FOREIGN KEY (`funcaoid`) REFERENCES `funcao`(`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

INSERT INTO
    `injmusic-bd`.`integrante` (
        `cpf`,
        `nome`,
        `endereco`,
        `bairro`,
        `cidade`,
        `uf`,
        `telefone`,
        `email`,
        `funcaoid`,
        `hash_password`
    )
VALUES
    (
        '36374800850',
        'Lilyan Gonçalves',
        'Floris do Prado, 100',
        'Ana Jacinta',
        'Presidente Prudente',
        'SP',
        '18996179838',
        'lilyangoncalves@gmail.com',
        '1',
        '2664252df5f9e76bae0c3fcfe511f48f9be2be2ec46755478c201d837d9e93e7'
    ),
    (
        '11111111111',
        'TESTE GERAL',
        'RUA BRASIL, 2000',
        'SAO PAULO',
        'SAO PAULO',
        'SP',
        '11998765432',
        'teste@gmail.com',
        '1',
        '2664252df5f9e76bae0c3fcfe511f48f9be2be2ec46755478c201d837d9e93e7'
    );

CREATE TABLE IF NOT EXISTS `injmusic-bd`.`integrante_funcao` (
    `integranteid` varchar(11) NOT NULL,
    `funcaoid` int(11) NOT NULL,
    PRIMARY KEY (`integranteid`, `funcaoid`),
    FOREIGN KEY (`integranteid`) REFERENCES `integrante` (`cpf`),
    FOREIGN KEY (`funcaoid`) REFERENCES `funcao` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

INSERT INTO
    `injmusic-bd`.`integrante_funcao` (`integranteid`, `funcaoid`)
VALUES
    ('36374800850', 1),
    ('36374800850', 2),
    ('36374800850', 3);

CREATE TABLE `injmusic-bd`.`evento` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `data` DATE NOT NULL,
    `horario` TIME NOT NULL,
    `descricao` VARCHAR(500) NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `injmusic-bd`.`evento_musicos` (
    `eventoid` INT NOT NULL,
    `integranteid` VARCHAR(11) NOT NULL,
    `funcaoid` INT NOT NULL,
    PRIMARY KEY (`eventoid`, `integranteid`, `funcaoid`),
    FOREIGN KEY (`eventoid`) REFERENCES `evento` (`id`),
    FOREIGN KEY (`integranteid`) REFERENCES `integrante` (`cpf`),
    FOREIGN KEY (`funcaoid`) REFERENCES `funcao` (`id`)
)ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;



CREATE TABLE `injmusic-bd`.`evento_musicas` (
    `eventoid` INT NOT NULL,
    `musicaid` INT NOT NULL,
    `tomescolhido` VARCHAR(5),
    `bpmescolhido` VARCHAR(3),
    `linkyoutube` VARCHAR(45),
    PRIMARY KEY (`eventoid`, `musicaid`),
    FOREIGN KEY (`eventoid`) REFERENCES `evento` (`id`),
    FOREIGN KEY (`musicaid`) REFERENCES `musica` (`id`)
)ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;