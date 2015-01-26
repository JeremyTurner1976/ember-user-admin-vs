using HandlebarsHelper;
using System.Web;
using System.Web.Optimization;

namespace Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {

            bundles.Add(new Bundle("~/bundles/userAdmin/templates", new HandlebarsTransformer())
                    .IncludeDirectory("~/Scripts/apps/user-admin/templates", "*.hbs", true)
            );

            bundles.Add(new Bundle("~/bundles/githubExplorer/templates", new HandlebarsTransformer())
                    .IncludeDirectory("~/Scripts/apps/github-explorer/templates", "*.hbs", true)
            );

            BundleTable.EnableOptimizations = true;

            //user-admin app
            bundles.Add(new ScriptBundle("~/apps/userAdmin")
                .Include("~/Scripts/apps/user-admin.js")
                .IncludeDirectory("~/Scripts/apps/user-admin/", "*.js", true));

            //github-explorer app
            bundles.Add(new ScriptBundle("~/apps/githubExplorer")
                .Include("~/Scripts/apps/github-explorer.js")
                .IncludeDirectory("~/Scripts/apps/github-explorer/", "*.js", true));

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}
