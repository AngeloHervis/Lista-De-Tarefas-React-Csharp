using System.ComponentModel.DataAnnotations;

namespace TarefasApi.Models;

public class Tarefa{
    [Key]
    public Guid Id { get; set; }
    public string Titulo { get; set; }
    public string Descricao { get; set; }
    public DateTime DataVencimento { get; set; }
    public bool Status { get; set; }
}