<?php

$mysql = new mysqli('localhost', 'root', 'root', 'luxuryrent');

$result = $mysql->query("SELECT * FROM `car` WHERE `id` = 3");

$car = $result->fetch_assoc();

$mysql->close();
