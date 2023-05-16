-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 16-Maio-2023 às 03:54
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `meubanco`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `clientes`
--

create TABLE `clientes` (
  `nome` varchar(255) DEFAULT NULL,
  `endereco` varchar(255) DEFAULT NULL,
  `Altura` varchar(30) DEFAULT NULL,
  `Idade` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
--
-- Extraindo dados da tabela `clientes`
--

INSERT INTO `clientes` (`nome`, `endereco`, `Altura`, `Idade`) VALUES
('dfgdfg', 'dfgsdfg', NULL, ''),
('Joedio', 'Arroio do Silva', NULL, ''),
('Teste', 'teste', NULL, ''),
('aloou', 'alou', NULL, ''),
('teste2', 'teste2', NULL, ''),
('Teste4', 'Teste4', NULL, ''),
('teste5', 'teste5', NULL, ''),
('teste6', 'teste6', NULL, '');
COMMIT;


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

create table `produtos` (
`id` varchar (30) not null,
`descricao` varchar (30) not null,
`quantidade` varchar (30) not null,
`valor` varchar (30) not null)