using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TarefasApi.Models;

namespace TarefasApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class SubTarefaController : ControllerBase
{
    private readonly AppDbContext _context;
    
    public SubTarefaController(AppDbContext context)
    {
        _context = context;
    }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<SubTarefa>>> GetSubTarefas()
    {
        return await _context.SubTarefas.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<SubTarefa>> GetSubTarefa(string id)
    {
        var subTarefa = await _context.SubTarefas.FindAsync(id);

        if (subTarefa == null)
        {
            return NotFound();
        }

        return subTarefa;
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutSubTarefa(string id, SubTarefa subTarefa)
    {
        if (id != subTarefa.SubTarefaId)
        {
            return BadRequest();
        }

        _context.Entry(subTarefa).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!SubTarefaExists(id))
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

    [HttpPost]
    public async Task<ActionResult<SubTarefa>> PostSubTarefa(SubTarefa subTarefa)
    {
        _context.SubTarefas.Add(subTarefa);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetSubTarefa", new { id = subTarefa.SubTarefaId }, subTarefa);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteSubTarefa(string id)
    {
        var subTarefa = await _context.SubTarefas.FindAsync(id);
        if (subTarefa == null)
        {
            return NotFound();
        }

        _context.SubTarefas.Remove(subTarefa);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool SubTarefaExists(string id)
    {
        return _context.SubTarefas.Any(e => e.SubTarefaId == id);
    }
}