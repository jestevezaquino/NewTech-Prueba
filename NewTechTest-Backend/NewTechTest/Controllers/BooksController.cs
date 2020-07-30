using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NewTechTest.Models;
using NewTechTest.Services;

namespace NewTechTest.Controllers
{
    [Route("api/[controller]")]
    public class BooksController : Controller
    {
        private readonly BookServices bookServices;

        public BooksController(BookServices _bookServices)
        {
            bookServices = _bookServices;
        }

        // GET: api/<controller>
        [HttpGet]
        public async Task<IActionResult> GetBooks()
        {
            IEnumerable<Book> result = await bookServices.GetBooksFromAPI();
            if (result == null)
            {
                return BadRequest();
            }
            else
            {
                return Ok(result);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetBookById(int id)
        {
            Book result = await bookServices.GetOneBookFromAPI(id);
            if (result == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(result);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddBook([FromBody] Book book)
        {
            bool result = await bookServices.AddBookToAPI(book);

            if (result)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditBook(int id, [FromBody] Book book)
        {
            bool result = await bookServices.EditBookAPI(id, book);
            if (result)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBook(int id)
        {
            bool result = await bookServices.DeleteBookAPI(id);
            if (result)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
