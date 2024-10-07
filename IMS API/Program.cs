using IMS_API.Data_Access_Layer;
using Microsoft.AspNetCore.Authentication.Cookies;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie(options =>
    {
        options.LoginPath = "/login";
        options.Cookie.SameSite = SameSiteMode.None;
        //options.Cookie.SecurePolicy = CookieSecurePolicy.None;
        //options.Cookie.HttpOnly = true;
        //options.Events.OnRedirectToLogin = context =>
        //{
        //    context.Response.StatusCode = 200; // Unauthorized status instead of redirect
        //    //context.Response.HttpContext.Session.Remove(".AspNetCore.Cookies");
        //    return context.Response.CompleteAsync();
        //};

        //options.Events.OnRedirectToLogout = context =>
        //{
        //    context.Response.StatusCode = 200; // Set response status for logout
        //    //context.Response.HttpContext.Session.Remove(".AspNetCore.Cookies");
        //    return Task.CompletedTask;
        //};
    });

builder.Services.AddHttpContextAccessor();


const string corsPolicyName = "MyOrigins";


builder.Services.AddCors(options =>
{
    options.AddPolicy(corsPolicyName, policy =>
    {
        policy.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader().AllowCredentials();
    });
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(corsPolicyName);

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
