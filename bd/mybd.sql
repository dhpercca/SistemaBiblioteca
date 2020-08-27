-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-09-2019 a las 00:31:12
-- Versión del servidor: 10.1.28-MariaDB
-- Versión de PHP: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mybd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleado`
--

CREATE TABLE `empleado` (
  `id` int(11) NOT NULL,
  `dni` int(8) DEFAULT NULL,
  `apellidos` varchar(25) DEFAULT NULL,
  `nombres` varchar(25) DEFAULT NULL,
  `fechanac` varchar(10) NOT NULL,
  `sexo` char(1) DEFAULT NULL,
  `edad` int(12) DEFAULT NULL,
  `direccion` varchar(25) NOT NULL,
  `email` varchar(25) DEFAULT NULL,
  `cargo` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `empleado`
--

INSERT INTO `empleado` (`id`, `dni`, `apellidos`, `nombres`, `fechanac`, `sexo`, `edad`, `direccion`, `email`, `cargo`) VALUES
(1, 76452633, 'Tarqui', 'Leigthon', '2019-09-06', 'M', 20, 'las glorietas g-18', 'rogertarqui12@gmail.com', 'Gerente'),
(4, 76452634, 'tarqui', 'luis', '2019-09-21', 'M', 20, 'las glorietas g-18, ', 'luis@gmail.com', 'Técnico'),
(7, 21321321, 'huanca', 'gisela', '2019-09-08', 'F', 39, 'miramar s-6', 'gisela@gmail.com', 'Secretaria');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `empleado`
--
ALTER TABLE `empleado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
