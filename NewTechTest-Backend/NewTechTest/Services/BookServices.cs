using NewTechTest.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace NewTechTest.Services
{
    public class BookServices
    {
        public async Task<IEnumerable<Book>> GetBooksFromAPI()
        {
            using (HttpClient client = new HttpClient())
            {
                HttpResponseMessage response = await client.GetAsync("https://fakerestapi.azurewebsites.net/api/Books");

                int numericStatusCode = (int)response.StatusCode;

                if (numericStatusCode == 200)
                {
                    string result = await response.Content.ReadAsStringAsync();
                    List<Book> books = JsonConvert.DeserializeObject<List<Book>>(result);
                    return books;
                }
                else
                {
                    return null;
                }
            }
        }

        public async Task<Book> GetOneBookFromAPI(int id)
        {
            using (HttpClient client = new HttpClient())
            {
                HttpResponseMessage response = await client.GetAsync($"https://fakerestapi.azurewebsites.net/api/Books/{id}");
                
                int numericStatusCode = (int)response.StatusCode;

                if(numericStatusCode == 200)
                {
                    string result = await response.Content.ReadAsStringAsync();
                    Book book = JsonConvert.DeserializeObject<Book>(result);
                    return book;
                }
                else
                {
                    return null;
                }
            }
        }

        public async Task<bool> AddBookToAPI(Book book)
        {
            using (HttpClient client = new HttpClient())
            {
                string json = JsonConvert.SerializeObject(book, Formatting.Indented);
                StringContent stringContent = new StringContent(json, Encoding.UTF8, "application/json");

                HttpResponseMessage response = await client.PostAsync("https://fakerestapi.azurewebsites.net/api/Books", stringContent);
                
                int numericStatusCode = (int)response.StatusCode;

                if(numericStatusCode == 200)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }

        public async Task<bool> EditBookAPI(int id, Book book)
        {
            using (HttpClient client = new HttpClient())
            {
                string json = JsonConvert.SerializeObject(book, Formatting.Indented);
                StringContent stringContent = new StringContent(json, Encoding.UTF8, "application/json");

                HttpResponseMessage response = await client.PutAsync($"https://fakerestapi.azurewebsites.net/api/Books/{id}", stringContent);
                int numericStatusCode = (int) response.StatusCode;
                
                if (numericStatusCode == 200) 
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }

        public async Task<bool> DeleteBookAPI(int id)
        {
            using (HttpClient client = new HttpClient())
            {
                HttpResponseMessage response = await client.DeleteAsync($"https://fakerestapi.azurewebsites.net/api/Books/{id}");
                int numericStatusCode = (int)response.StatusCode;

                if(numericStatusCode == 200)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }
    }
}
