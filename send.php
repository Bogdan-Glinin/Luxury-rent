<?php


if (!empty ($_FILES['file'])){
    $file = $_FILES['file'];
    $name = $file['name'];
    $pathFile = __DIR__ .'/imgphoto/'.$name;
    $filemane = $_COOKIE;

    
    
    
    if(!move_uploaded_file($file['tmp_name'], $pathFile)){
        echo  'файл не загружен';
    }
    
    
    $db = new mysqli('localhost', 'root', '', 'luxuryrent')
    or die('Error in established MySQL-server connect');

    $query = "INSERT INTO 'documents' ('photo_img', 'path', ) VALUES ('$name', '$pathFile')";

    $result = mysqli_query($db, $query)
    or die ('Error in query to database');
    mysqli_close($db);  
    
    

}



?>