using System;
using Microsoft.AspNet.Builder;
using Microsoft.Framework.DependencyInjection;
using Microsoft.Framework.Logging;

namespace FA7
{
	/// <summary>
	///		Startup logic for FA7.
	/// </summary>
	public class Startup
	{
		/// <summary>
		///		Configure dependency injection.
		/// </summary>
		/// <param name="services">
		///		The application-level collection of injectable services.
		/// </param>
		public void ConfigureServices(IServiceCollection services)
		{
			if (services == null)
				throw new ArgumentNullException(nameof(services));

			services.AddLogging();
		}

		/// <summary>
		///		Configure the application pipeline.
		/// </summary>
		/// <param name="app">
		///		The application pipeline builder.
		/// </param>
		/// <param name="loggerFactory">
		///		The logger factory service.
		/// </param>
		public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory)
		{
			if (app == null)
				throw new ArgumentNullException(nameof(app));

			if (loggerFactory == null)
				throw new ArgumentNullException(nameof(loggerFactory));

			// Serve static files.
			app.UseFileServer();

			// Meh, log to console.
			loggerFactory.MinimumLevel = LogLevel.Warning;
			loggerFactory.AddConsole();
		}
	}
}
