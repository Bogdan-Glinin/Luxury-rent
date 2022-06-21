<?php

$mysql = new mysqli('localhost', 'root', 'root', 'luxuryrent');

$cookie = $_COOKIE["id"];

$result = $mysql->query("SELECT * FROM `user` WHERE `id` = '$cookie'");

$user = $result->fetch_assoc();

$mysql->close();
