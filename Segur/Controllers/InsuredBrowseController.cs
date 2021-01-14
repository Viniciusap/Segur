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
    public class InsuredBrowseController : ControllerBase
    {
        private readonly ILogger<InsuredBrowseController> _logger;
        public InsuredBrowseController(ILogger<InsuredBrowseController> logger)
        {
            _logger = logger;
        }

        private static readonly string[] Nomes = new[]
        {
            "Abreu", "Jocenildo", "Cadalberto", "Antunes", "Oséias", "José Pádua", "Joaquim do Fundo", "Varella", "Fulano", "Cicrano", "Renato", "João Armless", "João the Fool", "Bebado da Viela", "Zacarias Uhaha", "Edson Pe Nascimento Lé", "Litlle John", "Augustus"
        };
        private static readonly string[] Enderecos = new[]
        {
            "Rua da Praça", "Vila Coutinho", "Viela do Rato", "Casa da Joana", "Beco do José", "Rua Sem Nome número Zero", "Rua do Bobo", "Rua Do campim", "Rua da Boca", "Cruzamento da rua Boca com a Rua Campim", "Rua da Espaçonave", "Rua Teste"
        };

        [HttpGet]
        public IEnumerable<Insured> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new Insured
            {
                Id = index,
                Name = Nomes[rng.Next(Nomes.Length)],
                Age = rng.Next(18, 91),
                Address = Enderecos[rng.Next(Enderecos.Length)]
            })
            .ToArray();
        }
    }
}
