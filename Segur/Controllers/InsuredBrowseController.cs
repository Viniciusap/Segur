using Dapper.Contrib.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using MySql.Data.MySqlClient;
using Segur.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace Segur.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InsuredBrowseController : ControllerBase
    {
        private readonly ILogger<InsuredBrowseController> _logger;
        private IConfiguration _configuration;
        public InsuredBrowseController(ILogger<InsuredBrowseController> logger, IConfiguration Configuration)
        {
            _logger = logger;
            _configuration = Configuration;
        }


        // POST: InsuredController/Create
        [HttpPost("create")]
        public long Create(insured _insured)
        {

            using MySqlConnection conexao = new MySqlConnection(_configuration.GetConnectionString("ConnMySql"));
            return conexao.Insert(_insured);
        }


        [HttpGet("all")]
        public IEnumerable<insured> Get()
        {

            using MySqlConnection conexao = new MySqlConnection(_configuration.GetConnectionString("ConnMySql"));
            return conexao.GetAll<insured>();

        }
    }
}
