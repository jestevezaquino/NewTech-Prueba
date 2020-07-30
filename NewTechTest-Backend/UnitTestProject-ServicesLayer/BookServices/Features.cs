using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NewTechTest.Models;
using NewTechTest.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace UnitTestProject_ServicesLayer
{
    [TestClass]
    public class Features
    {
        private readonly BookServices BS;

        public Features()
        {
            BS = new BookServices();
        }

        [TestMethod]
        public async Task GettingBooks()
        {
            var results = await BS.GetBooksFromAPI();
            Assert.IsNotNull(results);
        }

        [TestMethod]
        public async Task GettingOneBook()
        {
            var result = await BS.GetOneBookFromAPI(200);
            Assert.IsNotNull(result);
        }

        [TestMethod]
        public async Task AddingABook()
        {
            Book book = new Book()
            {
                Id = 101,
                Title = "Testing Books Funcionalities",
                Description = "Lorem Ipsum",
                PageCount = 0,
                Excerpt = "Lorem Ipsum",
                PublishDate = new System.DateTime(1999, 03, 09)
            };
            var result = await BS.AddBookToAPI(book);
            Assert.IsTrue(result != false);
        }

        [TestMethod]
        public async Task UpdatingABook()
        {
            Book book = new Book()
            {
                Id = 101,
                Title = "Testing Books Funcionalities",
                Description = "Jesus was here!",
                PageCount = 150,
                Excerpt = "Lorem Ipsum",
                PublishDate = new System.DateTime(1999,03,09)
            };
            var result = await BS.EditBookAPI(101,book);
            Assert.IsTrue(result != false);
        }

        [TestMethod]
        public async Task DeletingABook()
        {
            var result = await BS.DeleteBookAPI(101);
            Assert.IsTrue(result == true);
        }
    }
}
