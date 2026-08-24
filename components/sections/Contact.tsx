import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, CheckCircle } from 'lucide-react';
import Button from '../ui/Button';
import { ContactFormData, FormStatus } from '../../types';

interface ContactProps {
  initialService?: string;
}

const initialFormState: ContactFormData = {
  name: '',
  company: '',
  industry: '',
  employees: '',
  email: '',
  phone: '',
  serviceType: [],
  message: '',
  consent: false,
  newsletter: false
};

const Contact: React.FC<ContactProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  // Effect to pre-select service if passed from props
  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({
        ...prev,
        serviceType: [initialService],
        message: prev.message || `Hola, me interesa recibir información sobre el servicio de ${initialService}...`
      }));
    }
  }, [initialService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (name === 'serviceType') {
        // Simple implementation for single select in this demo, though logic supports array
        // For multi-select, a different UI component is needed. Using standard select here.
       setFormData(prev => ({ ...prev, [name]: [value] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear error when user types
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio';
    if (!formData.company.trim()) newErrors.company = 'La empresa es obligatoria';
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.phone.trim()) newErrors.phone = 'El teléfono es obligatorio';
    else if (!/^[0-9+ ]+$/.test(formData.phone)) newErrors.phone = 'Solo números y +';
    if (!formData.message.trim()) newErrors.message = 'Por favor contanos brevemente qué necesitás';
    if (!formData.consent) newErrors.consent = 'Debés autorizar el contacto';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setStatus('success');
    setFormData(initialFormState);
  };

  if (status === 'success') {
    return (
      <section className="bg-white py-20">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-primary-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Validación completada</h2>
          <p className="text-slate-600 mb-8">
            La demo no envió ni conservó la información. Este estado solo representa el comportamiento de la interfaz.
          </p>
          <Button onClick={() => setStatus('idle')} variant="outline">
            Probar nuevamente
          </Button>
        </div>
      </section>
    );
  }

  // Common input styles for consistency: white bg, dark text, tenuous placeholder
  const inputBaseClasses = "w-full px-4 py-2 bg-white text-slate-900 placeholder-slate-400 border rounded-md focus:ring-primary-500 focus:border-primary-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0";

  return (
    <section className="bg-white py-20 relative">
        {/* Background decorative element */}
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-slate-50 -z-10 rounded-tr-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
              Probá la validación con datos ficticios
            </h2>
            <p className="text-lg text-slate-500 mb-10">
              Formulario demostrativo con validación local. No está conectado a un servicio de contacto.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                <div>
                  <h4 className="text-lg font-medium text-slate-900">Email ilustrativo</h4>
                  <p className="text-slate-600">No disponible en esta demo</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                <div>
                  <h4 className="text-lg font-medium text-slate-900">Teléfono / WhatsApp</h4>
                  <p className="text-slate-600">No disponible en esta demo</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                <div>
                  <h4 className="text-lg font-medium text-slate-900">Zona de operación</h4>
                  <p className="text-slate-600">Contenido demostrativo sin cobertura comercial real.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-8">
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nombre y Apellido *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ej: Juan Pérez"
                    className={`${inputBaseClasses} ${errors.name ? 'border-red-500' : 'border-slate-300'}`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Empresa *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Ej: Glia S.A."
                    className={`${inputBaseClasses} ${errors.company ? 'border-red-500' : 'border-slate-300'}`}
                  />
                  {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                 <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ejemplo@empresa.com"
                    className={`${inputBaseClasses} ${errors.email ? 'border-red-500' : 'border-slate-300'}`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Teléfono / WP *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+54 11 1234-5678"
                    className={`${inputBaseClasses} ${errors.phone ? 'border-red-500' : 'border-slate-300'}`}
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                 <div>
                   <label htmlFor="industry" className="block text-sm font-medium text-slate-700 mb-1">Rubro</label>
                   <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className={`${inputBaseClasses} border-slate-300`}
                   >
                     <option value="">Seleccionar...</option>
                     <option value="industria">Industria / Fábrica</option>
                     <option value="logistica">Logística y Transporte</option>
                     <option value="construccion">Construcción</option>
                     <option value="servicios">Servicios / Oficinas</option>
                     <option value="comercio">Comercio</option>
                     <option value="consorcio">Consorcio</option>
                     <option value="otro">Otro</option>
                   </select>
                 </div>
                 <div>
                   <label htmlFor="employees" className="block text-sm font-medium text-slate-700 mb-1">Cant. Empleados</label>
                   <select
                    id="employees"
                    name="employees"
                    value={formData.employees}
                    onChange={handleChange}
                    className={`${inputBaseClasses} border-slate-300`}
                   >
                     <option value="">Seleccionar...</option>
                     <option value="1-20">1 - 20</option>
                     <option value="21-50">21 - 50</option>
                     <option value="51-100">51 - 100</option>
                     <option value="100+">Más de 100</option>
                   </select>
                 </div>
              </div>

              <div className="mb-6">
                <label htmlFor="serviceType" className="block text-sm font-medium text-slate-700 mb-1">Tipo de Necesidad</label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType[0] || ''} // Handle array as single value for this select
                  onChange={handleChange}
                  className={`${inputBaseClasses} border-slate-300`}
                >
                  <option value="">Seleccionar...</option>
                  <option value="Diagnóstico Integral">Diagnóstico Integral</option>
                  <option value="Planes y Programas">Planes y Programas</option>
                  <option value="Capacitación">Capacitación In-Company</option>
                  <option value="Auditorías">Auditorías y Cumplimiento</option>
                  <option value="Servicio Externo Continuo">Servicio Externo Continuo</option>
                  <option value="Consulta General">Consulta General</option>
                </select>
                {initialService && formData.serviceType[0] === initialService && (
                   <p className="mt-1 text-xs text-primary-600 font-medium">Pre-seleccionado basado en tu navegación.</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describinos brevemente tu necesidad..."
                  className={`${inputBaseClasses} ${errors.message ? 'border-red-500' : 'border-slate-300'}`}
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>

              <div className="mb-6 space-y-3">
                 <div className="flex items-start">
                   <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => handleChange(e as any)}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-slate-300 rounded mt-1 bg-white"
                   />
                   <label htmlFor="consent" className="ml-2 text-sm text-slate-600">
                     Comprendo que esta demo no envía ni guarda los datos ingresados. *
                   </label>
                 </div>
                 {errors.consent && <p className="ml-6 text-sm text-red-600">{errors.consent}</p>}

              </div>

              <Button 
                type="submit" 
                fullWidth 
              >
                Validar formulario de demo
              </Button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
