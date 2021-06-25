using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Helpers;
using System.Data.Entity;
using System.IO;
using System.Drawing;
using System.Drawing.Imaging;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    /*
    public class ConferenciaController : Controller
    {

        CarritoBDEntities db = new CarritoBDEntities();

        public ActionResult obtenerImagen(int id)
        {
            Producto producto = db.Producto.Find(id);
            byte[] byteImagen = producto.Foto;

            MemoryStream memoria = new MemoryStream(byteImagen);
            Image imagen = Image.FromStream(memoria);

            memoria = new MemoryStream();
            imagen.Save(memoria, ImageFormat.Jpeg);
            memoria.Position = 0;

            return File(memoria, "image/jpg");

        }

        public ActionResult Index()
        {
            return View(db.Producto.ToList());
        }

        public ActionResult Create()
        {
            return View(new Producto());
        }

        [HttpPost]
        public ActionResult Create(Producto obj)
        {
            HttpPostedFileBase archivo = Request.Files[0];

            if (archivo.ContentLength == 0)
            {
                ModelState.AddModelError("foto", "¡Es necesario subir una imagen!");
                return View(obj);
            }
            else
            {
                if (archivo.FileName.EndsWith(".jpg"))
                {
                    WebImage imagen = new WebImage(archivo.InputStream);
                    obj.Foto = imagen.GetBytes();
                }
                else
                {
                    ModelState.AddModelError("foto", "¡Solo formato JPG!");
                    return View(obj);
                }
            }



            db.Producto.Add(obj);
            db.SaveChanges();
            return RedirectToAction("Index");


        }


        public ActionResult Edit(int? id)
        {
            Producto persona = db.Producto.Find(id);

            return View(persona);
        }

        [HttpPost]
        public ActionResult Edit(Producto obj)
        {
            Producto _persona = new Producto();

            HttpPostedFileBase archivo = Request.Files[0];
            if (archivo.ContentLength == 0)
            {
                _persona = db.Producto.Find(obj.Id);
                obj.Foto = _persona.Foto;
            }
            else
            {
                if (archivo.FileName.EndsWith(".jpg"))
                {

                    WebImage imagen = new WebImage(archivo.InputStream);
                    obj.Foto = imagen.GetBytes();
                }
                else
                {
                    ModelState.AddModelError("foto", "¡Solo formato JPG!");
                    return View(db.Producto.Find(obj.Id));
                }
            }



            if (ModelState.IsValid)
            {
                db.Entry(_persona).State = EntityState.Detached;
                db.Entry(obj).State = EntityState.Modified;
                db.SaveChanges();
            }
            return RedirectToAction("Index");
        }


        public ActionResult Details(int? id)
        {
            Producto persona = db.Producto.Find(id);
            return View(persona);
        }

        public ActionResult Delete(int? id)
        {
            Producto persona = db.Producto.Find(id);

            db.Producto.Remove(persona);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

    }*/
}
