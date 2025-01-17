using System.ComponentModel.DataAnnotations;

namespace TarefasApi.Models;

public class Tarefa{
    [Key]
    public string TarefaId { get; set; } = Guid.NewGuid().ToString();
    public string UsuarioId { get; }
    public string Titulo { get; set; }
    public string Descricao { get; set; }
    public DateTime CriadoEm { get; set; } = DateTime.Now;
    public Categoria? Categoria { get; set; }
    public string? CategoriaId { get; set; }
    public string? Status { get; set; } = "Não iniciada";
}