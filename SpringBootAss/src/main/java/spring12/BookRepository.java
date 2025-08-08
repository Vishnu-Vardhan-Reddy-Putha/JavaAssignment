package spring12;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BookRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Book> findAllBooks() {
        return jdbcTemplate.query("SELECT * FROM books", (rs, rowNum) -> {
            Book book = new Book();
            book.setBookid(rs.getInt("bookid"));
            book.setBookname(rs.getString("bookname"));
            book.setAuthor(rs.getString("author"));
            book.setPrice(rs.getInt("price"));
            return book;
        });
    }
}
