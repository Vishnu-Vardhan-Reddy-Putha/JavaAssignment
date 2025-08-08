<html>
<head>
    <title>Registration</title>
</head>
<body>
    <h2>Spring MVC Form Demo - Registration</h2>
    <form action="/register" method="post">
        User Name: <input type="text" name="username"/><br/>
        Password: <input type="password" name="password"/><br/>
        E-mail: <input type="email" name="email"/><br/>
        Birthday (mm/dd/yyyy): <input type="text" name="birthday"/><br/>
        Profession:
        <select name="profession">
            <option>Developer</option>
            <option>Tester</option>
            <option>Manager</option>
        </select><br/>
        <input type="submit" value="Register"/>
    </form>
</body>
</html>
