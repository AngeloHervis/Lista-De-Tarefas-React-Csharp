// Program.cs
using Microsoft.EntityFrameworkCore;
using TarefasApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Adicionar serviços ao contêiner.
builder.Services.AddControllers();
builder.Services.AddDbContext<TarefaContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("TarefaContext")));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


//Adicionando Cors
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        builder => builder.AllowAnyOrigin()
                          .AllowAnyMethod()
                          .AllowAnyHeader());
});

var app = builder.Build();

// Configurar o pipeline HTTP.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

//Habilitando Cors
app.UseCors("AllowAll");

app.UseAuthorization();

app.MapControllers();

app.Run();
