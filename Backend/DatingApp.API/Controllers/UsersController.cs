using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Data;
using DatingApp.API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Controllers
{
    [Authorize]
    public class UsersController : BaseController
    {
        private readonly DataContext _DbContext;
        public UsersController(DataContext Dbcontext)
        {
            _DbContext = Dbcontext;
        }

        [HttpGet]
        public async Task<ActionResult<User>> GetUsers()
        {
            var users = await _DbContext.Users.ToListAsync();
            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _DbContext.Users.FirstOrDefaultAsync(x => x.Id == id);
            return Ok(user);
        }

    }
}