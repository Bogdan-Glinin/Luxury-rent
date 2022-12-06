<?php


if (!empty ($_FILES['file'])){
    $file = $_FILES['file'];
    $name = $file['name'];
    $pathFile = __DIR__ .'/imgphoto/'.$name;
    $userId = $_COOKIE["id"];

    
    
    
    if(!move_uploaded_file($file['tmp_name'], $pathFile)){
        echo  'файл не загружен';
    }
    
    
    $db = new mysqli('localhost', 'root', '', 'luxuryrent')
    or die('Error in established MySQL-server connect');

    $db->query("INSERT INTO `documents` (`photo_img`, `path`, `userId` ) VALUES ('$name', '$pathFile', '$userId')");

  
   
   
    mysqli_close($db);  
    
    

}



?>