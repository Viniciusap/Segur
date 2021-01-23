using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Segur.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Segur.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController
    {
        private readonly ILogger<ProductController> _logger;
        public ProductController(ILogger<ProductController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Products> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 1).Select(index => new Products
            {
                Id = index,
                Name = "Paulinho da Massa",
                Description = "Massa",
                Brand = "Alcântara SA",
                Value = 50.50,
                BarCode = "asdluadflohadsfloadsflasuhdflkajshdflkkahsgdf",
                Category = "Teste",
                QuantityMinimun = 1

            })
            .ToArray();
        }
    }
}
