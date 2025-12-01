import { useState, useEffect, useRef } from 'react';
import { timelineEvents, type TimelineEvent } from '../data/timeline';
import './Timeline.css';

export const Timeline = () => {
    const [visibleEvents, setVisibleEvents] = useState<Set<string>>(new Set());
    const [showRomanticMessage, setShowRomanticMessage] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [showDetailsCard, setShowDetailsCard] = useState(false);
    const [currentDetailImage, setCurrentDetailImage] = useState(0);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const timelineRef = useRef<HTMLDivElement>(null);
    const confettiCanvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const eventId = (entry.target as HTMLElement).dataset.eventId;
                        if (eventId) {
                            setVisibleEvents((prev) => new Set(prev).add(eventId));
                        }
                    }
                });
            },
            { threshold: 0.3 }
        );

        const eventElements = document.querySelectorAll('.timeline-event');
        eventElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    // Handle Escape key for detail modal
    useEffect(() => {
        if (!isDetailModalOpen) return;

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsDetailModalOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isDetailModalOpen]);

    const handleRomanticClick = () => {
        setShowRomanticMessage(true);
        setShowConfetti(true);
        triggerConfetti();
    };

    const triggerConfetti = () => {
        const canvas = confettiCanvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const confetti: Array<{
            x: number;
            y: number;
            vx: number;
            vy: number;
            color: string;
            size: number;
            rotation: number;
            rotationSpeed: number;
        }> = [];

        const colors = ['#8B5CF6', '#F97316', '#A78BFA', '#FB923C', '#C4B5FD', '#FED7AA'];

        for (let i = 0; i < 150; i++) {
            confetti.push({
                x: Math.random() * canvas.width,
                y: -10,
                vx: (Math.random() - 0.5) * 4,
                vy: Math.random() * 3 + 2,
                color: colors[Math.floor(Math.random() * colors.length)],
                size: Math.random() * 8 + 4,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 10,
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = confetti.length - 1; i >= 0; i--) {
                const piece = confetti[i];
                piece.x += piece.vx;
                piece.y += piece.vy;
                piece.rotation += piece.rotationSpeed;
                piece.vy += 0.1; // gravity

                ctx.save();
                ctx.translate(piece.x, piece.y);
                ctx.rotate((piece.rotation * Math.PI) / 180);
                ctx.fillStyle = piece.color;
                ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size);
                ctx.restore();

                if (piece.y > canvas.height + 20) {
                    confetti.splice(i, 1);
                }
            }

            if (confetti.length > 0) {
                requestAnimationFrame(animate);
            } else {
                setShowConfetti(false);
            }
        };

        animate();
    };

    return (
        <div className="timeline-container">
            <canvas
                ref={confettiCanvasRef}
                className={`confetti-canvas ${showConfetti ? 'active' : ''}`}
            />

            <div className="timeline-header">
                <h2>Nuestra Historia</h2>
                <p className="timeline-subtitle">Acompáñame a recorrer un viaje a través de los años</p>
            </div>

            <div ref={timelineRef} className="timeline">
                {timelineEvents.map((event, index) => (
                    <TimelineEventCard
                        key={event.id}
                        event={event}
                        index={index}
                        isVisible={visibleEvents.has(event.id)}
                    />
                ))}
            </div>

            {!showDetailsCard && (
                <div className="timeline-footer">
                    <div className="romantic-message-container">
                        {!showRomanticMessage && (
                            <>
                                <h3 className="future-question">
                                    ¿Listo para seguir viviendo los próximos años juntos?
                                </h3>
                                <button className="romantic-button" onClick={handleRomanticClick}>
                                    ¡Por supuesto! 💕
                                </button>
                            </>
                        )}
                        {showRomanticMessage && (
                            <div className="romantic-message">
                                <h3>Te amo más de lo que las palabras pueden expresar</h3>
                                <p>
                                    Cada día a tu lado es un regalo. Gracias por ser mi persona favorita,
                                    mi mejor amigo, y mi todo. Aquí estoy por muchos años más de risas,
                                    aventuras, y amor infinito 💜🧡
                                </p>

                                <p>
                                    Y recuerda que en los detalles esta la esencia de las personas.
                                    A lo mejor ya no lo quieras llevar grabado en tu piel pero espero que si desees llevarlo cerca de tu corazón
                                </p>
                                <p>
                                    Te amo mucho, espero te guste este detalle 💜🧡
                                </p>
                                <button
                                    className="romantic-button"
                                    onClick={() => {
                                        setShowDetailsCard(true);
                                        setShowConfetti(true);
                                        triggerConfetti();
                                        // Scroll suave hacia la card de detalles después de un pequeño delay
                                        setTimeout(() => {
                                            const detailsCard = document.querySelector('.details-card-container');
                                            if (detailsCard) {
                                                detailsCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                            }
                                        }, 300);
                                    }}
                                >
                                    Te amo también 💖
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Card de detalles con imágenes */}
            {showDetailsCard && (
                <>
                    <div className="details-card-container">
                        <div className="details-card">
                            <h3 className="details-card-title">Feliz 6to Aniversario💜</h3>

                            {/* Carrusel de imágenes */}
                            <div className="details-carousel">
                                <button
                                    type="button"
                                    className="carousel-nav-button carousel-prev"
                                    onClick={() => setCurrentDetailImage((prev) => (prev > 0 ? prev - 1 : 6))}
                                    aria-label="Imagen anterior"
                                >
                                    ‹
                                </button>

                                <button
                                    type="button"
                                    className="carousel-image-container"
                                    onClick={() => setIsDetailModalOpen(true)}
                                    aria-label="Ver imagen en tamaño completo"
                                >
                                    <img
                                        src={`/timeline/detail-${currentDetailImage + 1}.jpg`}
                                        alt={`Detalle ${currentDetailImage + 1}`}
                                        className="carousel-main-image"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%238B5CF6" width="400" height="300"/%3E%3Ctext fill="white" font-family="Arial" font-size="24" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3E%3C/text%3E%3C/svg%3E';
                                        }}
                                    />
                                    <div className="carousel-image-overlay">
                                        <span className="zoom-hint">🔍 Toca para ampliar</span>
                                    </div>
                                </button>

                                <button
                                    type="button"
                                    className="carousel-nav-button carousel-next"
                                    onClick={() => setCurrentDetailImage((prev) => (prev < 6 ? prev + 1 : 0))}
                                    aria-label="Imagen siguiente"
                                >
                                    ›
                                </button>
                            </div>

                            {/* Indicadores (dots) */}
                            <div className="carousel-indicators">
                                {[1, 2, 3, 4, 5, 6, 7].map((num, index) => (
                                    <button
                                        key={num}
                                        type="button"
                                        className={`carousel-dot ${currentDetailImage === index ? 'active' : ''}`}
                                        onClick={() => setCurrentDetailImage(index)}
                                        aria-label={`Ir a imagen ${num}`}
                                        aria-current={currentDetailImage === index}
                                    />
                                ))}
                            </div>

                            {/* Contador de imágenes */}
                            <div className="carousel-counter">
                                {currentDetailImage + 1} / 7
                            </div>
                        </div>
                    </div>

                    {/* Modal de imagen ampliada */}
                    {isDetailModalOpen && (
                        <div
                            className="detail-modal-overlay"
                            onClick={() => setIsDetailModalOpen(false)}
                            role="dialog"
                            aria-modal="true"
                            aria-label="Vista de imagen ampliada"
                        >
                            <div className="detail-modal-content" onClick={(e) => e.stopPropagation()}>
                                <button
                                    type="button"
                                    className="detail-modal-close"
                                    onClick={() => setIsDetailModalOpen(false)}
                                    aria-label="Cerrar vista de imagen"
                                >
                                    ×
                                </button>

                                <button
                                    type="button"
                                    className="detail-modal-nav detail-modal-prev"
                                    onClick={() => setCurrentDetailImage((prev) => (prev > 0 ? prev - 1 : 6))}
                                    aria-label="Imagen anterior"
                                >
                                    ‹
                                </button>

                                <img
                                    src={`/timeline/detail-${currentDetailImage + 1}.jpg`}
                                    alt={`Detalle ${currentDetailImage + 1}`}
                                    className="detail-modal-image"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%238B5CF6" width="400" height="300"/%3E%3Ctext fill="white" font-family="Arial" font-size="24" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3E%3C/text%3E%3C/svg%3E';
                                    }}
                                />

                                <button
                                    type="button"
                                    className="detail-modal-nav detail-modal-next"
                                    onClick={() => setCurrentDetailImage((prev) => (prev < 6 ? prev + 1 : 0))}
                                    aria-label="Imagen siguiente"
                                >
                                    ›
                                </button>

                                <div className="detail-modal-counter">
                                    {currentDetailImage + 1} / 7
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

interface TimelineEventCardProps {
    event: TimelineEvent;
    index: number;
    isVisible: boolean;
}

const TimelineEventCard = ({ event, index, isVisible }: TimelineEventCardProps) => {
    const isEven = index % 2 === 0;
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [modalImageIndex, setModalImageIndex] = useState(0);

    const fallbackImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%238B5CF6" width="400" height="300"/%3E%3Ctext fill="white" font-family="Arial" font-size="24" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3E%3C/text%3E%3C/svg%3E';

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const target = e.target as HTMLImageElement;
        target.src = fallbackImage;
    };

    const openImageModal = (imageIndex: number) => {
        setModalImageIndex(imageIndex);
        setIsImageModalOpen(true);
    };

    const closeImageModal = () => {
        setIsImageModalOpen(false);
    };

    // Handle Escape key for modal
    useEffect(() => {
        if (!isImageModalOpen) return;

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeImageModal();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isImageModalOpen]);

    const navigateModalImage = (direction: 'prev' | 'next') => {
        if (direction === 'prev') {
            setModalImageIndex((prev) => (prev > 0 ? prev - 1 : event.images.length - 1));
        } else {
            setModalImageIndex((prev) => (prev < event.images.length - 1 ? prev + 1 : 0));
        }
    };

    return (
        <>
            <div
                className={`timeline-event ${isEven ? 'left' : 'right'} ${isVisible ? 'visible' : ''}`}
                data-event-id={event.id}
            >
                <div className="timeline-marker">
                    <div className="marker-dot"></div>
                    <div className="marker-line"></div>
                </div>

                <div className="timeline-content">
                    <div className="event-date">{event.date}</div>
                    <div className="event-card">
                        <div className="event-images-gallery">
                            {/* Imagen principal */}
                            <button
                                type="button"
                                className="main-image-container"
                                onClick={() => openImageModal(selectedImageIndex)}
                                aria-label={`Ver imagen ${selectedImageIndex + 1} de ${event.images.length} en tamaño completo`}
                            >
                                <img
                                    src={event.images[selectedImageIndex] || fallbackImage}
                                    alt={`${event.title} - Foto ${selectedImageIndex + 1}`}
                                    className="main-event-image"
                                    onError={handleImageError}
                                />
                                {event.images.length > 1 && (
                                    <div className="image-counter">
                                        {selectedImageIndex + 1} / {event.images.length}
                                    </div>
                                )}
                            </button>

                            {/* Miniaturas */}
                            {event.images.length > 1 && (
                                <div className="image-thumbnails">
                                    {event.images.map((image, imgIndex) => (
                                        <button
                                            type="button"
                                            key={`${event.id}-img-${imgIndex}`}
                                            className={`thumbnail-container ${selectedImageIndex === imgIndex ? 'active' : ''}`}
                                            onClick={() => setSelectedImageIndex(imgIndex)}
                                            aria-label={`Seleccionar imagen ${imgIndex + 1}`}
                                            aria-pressed={selectedImageIndex === imgIndex}
                                        >
                                            <img
                                                src={image}
                                                alt={`Miniatura ${imgIndex + 1}`}
                                                className="thumbnail-image"
                                                onError={handleImageError}
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="event-info">
                            <h3 className="event-title">{event.title}</h3>
                            <p className="event-anecdote">{event.anecdote}</p>
                            <div className="event-funfact">
                                <span className="funfact-icon">✨</span>
                                <span>{event.funFact}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal para ver imagen en grande */}
            {isImageModalOpen && (
                <div
                    className="image-modal-overlay"
                    onClick={closeImageModal}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Vista de imagen ampliada"
                >
                    <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="modal-close-button"
                            onClick={closeImageModal}
                            aria-label="Cerrar vista de imagen"
                        >
                            ×
                        </button>
                        {event.images.length > 1 && (
                            <>
                                <button
                                    className="modal-nav-button modal-nav-prev"
                                    onClick={() => navigateModalImage('prev')}
                                    aria-label="Imagen anterior"
                                >
                                    ‹
                                </button>
                                <button
                                    className="modal-nav-button modal-nav-next"
                                    onClick={() => navigateModalImage('next')}
                                    aria-label="Imagen siguiente"
                                >
                                    ›
                                </button>
                            </>
                        )}
                        <img
                            src={event.images[modalImageIndex] || fallbackImage}
                            alt={`${event.title} - Foto ${modalImageIndex + 1}`}
                            className="modal-image"
                            onError={handleImageError}
                        />
                        {event.images.length > 1 && (
                            <div className="modal-image-counter">
                                {modalImageIndex + 1} / {event.images.length}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

