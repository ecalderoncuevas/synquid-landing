import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle"; // <-- Añadimos el botón de tema

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24 max-w-5xl mx-auto space-y-20">
      
      {/* BOTÓN DE TEMA (Flotante arriba a la derecha) */}
      <ModeToggle />
      
      {/* 1. SECCIÓN HERO (Presentación) */}
      <section className="w-full text-center space-y-8 mt-10">
        {/* Simulación del Logo de Synquid */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
            {/* Si tienes el logo en .png o .svg, pon una etiqueta <img src="/logo.png" /> aquí */}
            <span className="text-primary-foreground font-bold text-3xl">S</span>
          </div>
        </div>

        <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl">
          Controla la asistencia.<br />
          <span className="text-primary">La historia detrás</span> de cada toque.
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Un panel único para lectores, asistencia y registros de auditoría.<br/> 
          Construido para equipos que se mueven rápido.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button size="lg" className="h-12 px-8 text-md font-semibold">Descargar APK</Button>
          <Button variant="outline" size="lg" className="h-12 px-8 text-md font-semibold">Ver en GitHub</Button>
        </div>
      </section>

      <Separator className="opacity-50" />

      {/* 2. SECCIÓN DESCARGAS */}
      <section className="w-full" id="descargas">
        <h2 className="text-3xl font-semibold tracking-tight mb-8 text-center">Descargas Oficiales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/50 border-muted">
            <CardHeader>
              <CardTitle className="text-primary">Versión Móvil (Android)</CardTitle>
              <CardDescription>Aplicación nativa para alumnos y profesores.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-6">Requiere Android 8.0 o superior. Instalación manual mediante APK.</p>
              <Button className="w-full font-semibold">Descargar app-release.apk</Button>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-muted">
            <CardHeader>
              <CardTitle className="text-primary">Versión Web / Backend</CardTitle>
              <CardDescription>Acceso al panel de administración.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-6">Accede directamente desde tu navegador sin instalar nada.</p>
              <Button variant="secondary" className="w-full font-semibold">Ir al Dashboard Web</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 3. SECCIÓN MANUAL DE USUARIO */}
      <section className="w-full" id="manual">
        <h2 className="text-3xl font-semibold tracking-tight mb-8 text-center">Manual de Instalación y Uso</h2>
        <Card className="bg-card/50 border-muted p-2">
          <Accordion type="single" collapsible className="w-full px-4">
            <AccordionItem value="item-1" className="border-muted">
              <AccordionTrigger className="text-left hover:text-primary transition-colors">1. ¿Cómo instalo la aplicación en Android?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Descarga el archivo <strong className="text-foreground">app-release.apk</strong> desde la sección de descargas. Abre el archivo en tu móvil Android. Si te pide permisos para "Instalar aplicaciones de orígenes desconocidos", acéptalos y continúa con la instalación.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-muted">
              <AccordionTrigger className="text-left hover:text-primary transition-colors">2. Primer inicio de sesión</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Abre la aplicación Synquid. Introduce tu correo institucional y tu contraseña proveída por el administrador del sistema para acceder a tu panel.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-transparent">
              <AccordionTrigger className="text-left hover:text-primary transition-colors">3. ¿Cómo registrar una asistencia?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Si eres profesor, ve a la pestaña "Mis Grupos", selecciona la clase actual y utiliza los botones para marcar a los alumnos presentes o ausentes. Los cambios se sincronizarán en menos de 120ms.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      </section>

    </main>
  );
}