<!DOCTYPE html>
<html>
<head>
    <title>User Registration</title>
</head>
<body>
    <h2>User Registration</h2>
    <form action="register" method="post">
        Full name: <input type="text" name="fullname"><br>
        Email: <input type="email" name="email"><br>
        Password: <input type="password" name="password"><br>
        Birthday (yyyy-mm-dd): <input type="date" name="birthday"><br>
        Gender: 
        <input type="radio" name="gender" value="Male">Male
        <input type="radio" name="gender" value="Female">Female<br>
        Profession: <input type="text" name="profession"><br>
        Married? <select name="married">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select><br><br>
        <input type="submit" value="Register">
    </form>
</body>
</html>