using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Data;
using DatingApp.API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]        //api/users
    public class UsersController : ControllerBase
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

        [HttpPost]
        public async Task<ActionResult<User>> CreateUser(User user)
        {
            _DbContext.Users.Add(user);
            await _DbContext.SaveChangesAsync();
            return Ok(user);
        }

        [HttpPut]
        public async Task<ActionResult<User>> UpdateUser(User user)
        {
            _DbContext.Users.Update(user);
            await _DbContext.SaveChangesAsync();
            return Ok(user);
        }


    }
}