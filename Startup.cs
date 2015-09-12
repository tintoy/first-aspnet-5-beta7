using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Http;
using Microsoft.Framework.DependencyInjection;
using Microsoft.Framework.Logging;
using Microsoft.Framework.Logging.Console;

namespace fa7
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
			if (services == null)
                throw new ArgumentNullException("services");

            services.AddLogging();
        }

        public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory)
        {
			if (app == null)
				throw new ArgumentNullException("app");

			if (loggerFactory == null)
                throw new ArgumentNullException("loggerFactory");

			loggerFactory.MinimumLevel = LogLevel.Information;
            loggerFactory.AddConsole();

            app.UseFileServer();
        }
    }
}
