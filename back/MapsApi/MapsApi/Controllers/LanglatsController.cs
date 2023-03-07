using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MapsApi.Models;

namespace MapsApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LanglatsController : ControllerBase
    {
        private readonly MapdbContext _context;

        public LanglatsController(MapdbContext context)
        {
            _context = context;
        }

        // GET: api/Langlats
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Langlat>>> GetLanglats()
        {
            return await _context.Langlats.ToListAsync();
        }

        // GET: api/Langlats/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Langlat>> GetLanglat(int id)
        {
            var langlat = await _context.Langlats.FindAsync(id);

            if (langlat == null)
            {
                return NotFound();
            }

            return langlat;
        }

        // PUT: api/Langlats/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLanglat(int id, Langlat langlat)
        {
            if (id != langlat.Id)
            {
                return BadRequest();
            }

            _context.Entry(langlat).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LanglatExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Langlats
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Langlat>> PostLanglat(Langlat langlat)
        {
            _context.Langlats.Add(langlat);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLanglat", new { id = langlat.Id }, langlat);
        }

        // DELETE: api/Langlats/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLanglat(int id)
        {
            var langlat = await _context.Langlats.FindAsync(id);
            if (langlat == null)
            {
                return NotFound();
            }

            _context.Langlats.Remove(langlat);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LanglatExists(int id)
        {
            return _context.Langlats.Any(e => e.Id == id);
        }
    }
}
