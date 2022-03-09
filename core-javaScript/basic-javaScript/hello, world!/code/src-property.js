




<!DOCTYPE HTML>
<html>
  <body>
    <script src="file.js">
      alert(1); // src 속성이 사용될 시, 내부코드를 동시에 가질 수 없음
    </script>

    <script src="file.js">
    </script>
    <script>
      alert(1); // script를 복수 사용시에는 가능
    </script>

  </body>
</html>










