import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Lock, User, Wifi, Wind, Car, Users, Clock, Plus, Check, Bath, X, Calendar, UserCheck, Trash2, Pencil, ExternalLink } from 'lucide-react';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import breakfastImage from '../assets/e92e76d334fc055c8e55cca12eed5e4adc81d980.png';
import mountainTrailImage from '../assets/mountain-trail.png';
import horseRidingImage from '../assets/horse-riding.png';
import bathImage from '../assets/786846110668afb0362d7f54c5297a41ae8da65a.png';
import spaImage from '../assets/6ace5a73faa3cd0ec60f2e1b24683dc849421f93.png';
import poolImage from '../assets/f18f638f59bffa1f7a07437c1d4d0856979cc556.png';
import roomImage from '../assets/a8b6e7f9e8d2e1b7527b454f12a5163dbcccfd24.png';


function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- MOCK DATA ---

const GUESTS = [
  { id: 'g1', name: 'Взрослый 1', label: 'Взрослый на основном месте', type: 'adult', tariff: 'Тариф весенний', tariffPrice: 42400 },
  { id: 'g2', name: 'Взрослый 2', label: 'Взрослый на основном месте', type: 'adult', tariff: 'Тариф весенний', tariffPrice: 42400 },
  { id: 'g3', name: 'Ребенок 1', label: 'Ребенок на дополнительном месте', type: 'child', tariff: 'Тариф весенний', tariffPrice: 12000 },
];

const DATES = ['16 апреля', '17 апреля', '18 апреля', '19 апреля', '20 апреля', '21 апреля'];
const CALENDAR_STRIP_DATES = [
  '14 апреля',
  '15 апреля',
  '16 апреля',
  '17 апреля',
  '18 апреля',
  '19 апреля',
  '20 апреля',
  '21 апреля',
  '22 апреля',
  '23 апреля',
  '24 апреля',
  '25 апреля',
  '26 апреля',
  '27 апреля',
  '28 апреля',
  '29 апреля',
];
const TIME_SLOTS = ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00'];
const ANY_SPECIALIST = 'Любой';
const SPA_SPECIALISTS = ['Анна Петрова', 'Мария Иванова', 'Елена Смирнова', 'Ольга Соколова', 'Наталья Орлова'];
const SPECIALISTS = [ANY_SPECIALIST, ...SPA_SPECIALISTS];

function getSpaBaseTimeSlotsForSpecialist(date: string, specialist: string) {
  const dateIndex = DATES.indexOf(date);

  if (specialist === 'Анна Петрова') {
    if (dateIndex === 0) return ['10:00', '14:00'];
    if (dateIndex === 2) return ['10:00', '12:00', '14:00'];
    if (dateIndex === 3) return ['10:00', '12:00'];
    if (dateIndex === 4) return [];
    return ['10:00', '12:00', '14:00'];
  }

  if (specialist === 'Мария Иванова') {
    if (dateIndex === 0) return ['18:00'];
    if (dateIndex === 2) return ['14:00', '16:00'];
    if (dateIndex === 3) return [];
    if (dateIndex === 4) return ['14:00'];
    return ['14:00'];
  }

  if (specialist === 'Елена Смирнова') {
    if (dateIndex === 0) return ['20:00'];
    if (dateIndex === 2) return ['16:00', '18:00', '20:00'];
    if (dateIndex === 3) return ['16:00', '20:00'];
    if (dateIndex === 4) return ['18:00'];
    return ['16:00', '18:00', '20:00'];
  }

  if (specialist === 'Ольга Соколова') {
    if (dateIndex === 0) return ['10:00', '18:00'];
    if (dateIndex === 2) return ['10:00', '16:00'];
    if (dateIndex === 3) return ['12:00'];
    if (dateIndex === 4) return [];
    return ['10:00', '16:00'];
  }

  if (specialist === 'Наталья Орлова') {
    if (dateIndex === 0 || dateIndex === 1 || dateIndex === 5) return [];
    if (dateIndex === 2) return ['12:00', '18:00'];
    if (dateIndex === 3) return ['20:00'];
    if (dateIndex === 4) return ['14:00'];
    return ['12:00', '18:00'];
  }

  return [];
}

const SERVICES = [
	  {
	    id: 'breakfast',
	    title: 'Завтрак континентальный',
	    basePrice: 8400,
	    priceLabel: '3 гостя • 6 дней',
	    description: 'Легкий завтрак на каждый день проживания: горячий напиток, свежая выпечка, сезонные продукты и фрукты.',
	    features: [{ icon: <Users size={16} />, text: 'для 3 гостей' }, { icon: <Clock size={16} />, text: 'на 6 дней' }],
	    image: breakfastImage,
	    configType: 'per_guest',
    badge: 'Выгодно заранее',
  },
  {
    id: 'mountain-trail',
    title: 'Экскурсия "Горная тропа"',
    basePrice: 500,
    adultPrice: 1000,
    childPrice: 500,
    priceLabel: '1 гость',
    description: 'Пешеходная экскурсия по живописной горной тропе рядом с загородным отелем в сопровождении гида.',
    features: [{ icon: <Users size={16} />, text: 'для 1 гостя' }, { icon: <Clock size={16} />, text: '2 часа' }],
    image: mountainTrailImage,
    configType: 'age_price_live',
    badge: 'Маршрут с гидом',
    showFromPrice: true,
  },
  {
    id: 'horse-riding',
    title: 'Конная прогулка',
    basePrice: 9000,
    adultPrice: 3500,
    childPrice: 2000,
    priceLabel: '3 гостя',
    description: 'Наш отель обладает полноценной инфраструктурой высочайшего качества для содержания и ухода за лошадьми, организации российских и международных соревнований, проведения праздников и фестивалей. Наш отель — один из самых развитых конноспортивных клубов России в котором мечтают тренироваться лучшие спортсмены. Это мощная тренировочная база с ведущими специалистами для профессиональных спортсменов и обучения юных всадников — здесь готовят чемпионов! Все гости имеют возможность открыть для себя верховую езду. Тренировки доступны как для всадников, не имеющих опыта, так и для любителей с продвинутым уровнем подготовки.',
    features: [{ icon: <Users size={16} />, text: 'для 1 гостя' }, { icon: <Clock size={16} />, text: '2 часа' }],
    image: horseRidingImage,
    configType: 'age_price_live',
    badge: 'С инструктором',
    prefillBookingGuests: true,
  },
  {
    id: 'bath',
	    title: 'Аренда банного комплекса',
	    basePrice: 16000,
	    priceLabel: '4 гостя • 2 часа',
	    description: 'Приватная аренда банного комплекса для семьи или компании с возможностью выбрать дату, время и дополнительные часы.',
	    features: [{ icon: <Users size={16} />, text: 'для 4 гостей' }, { icon: <Clock size={16} />, text: 'от 2 часов' }],
	    image: bathImage,
	    configType: 'banya',
    badge: 'Популярно',
  },
  {
    id: 'spa',
	    title: 'Спа программа для тела "Турецкий шарм"',
	    basePrice: 4500,
	    priceLabel: '1 гость • 2 часа',
	    description: 'Расслабляющая спа-программа с индивидуальным временем посещения и выбором специалиста.',
	    features: [{ icon: <Users size={16} />, text: 'для 1 гостя' }, { icon: <Clock size={16} />, text: '2 часа' }],
	    image: spaImage,
	    configType: 'spa',
    badge: 'СПА-зона',
  },
  {
    id: 'pool',
	    title: 'Посещение аквапарка',
	    basePrice: 500,
	    priceLabel: '1 гость',
	    description: 'Билеты в зону подогреваемых бассейнов с разной стоимостью для взрослых и детей.',
	    features: [{ icon: <Users size={16} />, text: 'для 1 гостя' }, { icon: <Clock size={16} />, text: 'с 10:00 до 19:00' }],
	    image: poolImage,
	    configType: 'pool',
    badge: 'Для всей семьи',
    showFromPrice: true,
  }
];

const MAX_ADULTS = 2;
const MAX_CHILDREN = 1;
const BANYA_BASE_PRICE = 16000;
const BANYA_INCLUDED_GUESTS = 4;
const BANYA_INCLUDED_HOURS = 2;
const BANYA_EXTRA_GUEST_PRICE = 1000;
const BANYA_EXTRA_HOUR_PRICE = 3000;
const BANYA_MAX_EXTRA_GUESTS = 2;
const BANYA_MAX_EXTRA_HOURS = 2;
const SPA_PRICE = 4500;
const BREAKFAST_ADULT_PRICE = 600;
const BREAKFAST_CHILD_PRICE = 200;
const TRAIL_ADULT_PRICE = 1000;
const TRAIL_CHILD_PRICE = 500;
const POOL_ADULT_PRICE = 1000;
const POOL_CHILD_PRICE = 500;

function formatGuests(count: number) {
  if (count === 0) return '0 гостей';
  return `${count} ${count === 1 ? 'гость' : count < 5 ? 'гостя' : 'гостей'}`;
}

function formatAddedServices(count: number) {
  if (count === 0) return 'услуги не добавлены';
  if (count === 1) return '1 услуга добавлена';
  if (count > 1 && count < 5) return `${count} услуги добавлены`;
  return `${count} услуг добавлено`;
}

function getBanyaGuests(extraGuest = 0) {
  return BANYA_INCLUDED_GUESTS + extraGuest;
}

function getBanyaHours(extraHour = 0) {
  return BANYA_INCLUDED_HOURS + extraHour;
}

function getBanyaPrice(extraGuest = 0, extraHour = 0) {
  return BANYA_BASE_PRICE + extraGuest * BANYA_EXTRA_GUEST_PRICE + extraHour * BANYA_EXTRA_HOUR_PRICE;
}

function distributeTicketsByGuest(guests: typeof GUESTS, totalCount: number, pricePerTicket: number) {
  let remaining = totalCount;
  return guests.map((guest, idx) => {
    const isLastGuest = idx === guests.length - 1;
    const count = remaining <= 0 ? 0 : isLastGuest ? remaining : 1;
    remaining -= count;
    return {
      guestId: guest.id,
      type: guest.type,
      count,
      pricePerTicket,
    };
  });
}

function getAgePriceAdultPrice(service: any) {
  return service.adultPrice ?? TRAIL_ADULT_PRICE;
}

function getAgePriceChildPrice(service: any) {
  return service.childPrice ?? TRAIL_CHILD_PRICE;
}

function getAgePriceCartItem(service: any, adultCount: number, childCount: number) {
  const adultPrice = getAgePriceAdultPrice(service);
  const childPrice = getAgePriceChildPrice(service);
  const adultGuests = GUESTS.filter(g => g.type === 'adult');
  const childGuests = GUESTS.filter(g => g.type === 'child');
  const finalPrice = adultCount * adultPrice + childCount * childPrice;
  const priceLabel = formatGuests(adultCount + childCount);

  return {
    ...service,
    finalPrice,
    guestAgePrices: [
      ...distributeTicketsByGuest(adultGuests, adultCount, adultPrice),
      ...distributeTicketsByGuest(childGuests, childCount, childPrice)
    ],
    adultCount,
    childCount,
    priceLabel
  };
}

function getGuestServiceRows(cartItems: any[], guest: typeof GUESTS[number]) {
  return cartItems
    .map((item, idx) => {
      if (item.guestBreakfasts) {
        const guestBreakfast = item.guestBreakfasts.find((gb: any) => gb.guestId === guest.id);
        if (guestBreakfast && guestBreakfast.count > 0) {
          return {
            key: `${item.id}-${guest.id}-${idx}`,
            title: `${item.title} × ${guestBreakfast.count}`,
            meta: '',
            price: guestBreakfast.count * guestBreakfast.pricePerDay,
          };
        }
      }

      if (item.guestPools) {
        const guestPool = item.guestPools.find((gp: any) => gp.guestId === guest.id);
        if (guestPool && guestPool.count > 0) {
          return {
            key: `${item.id}-${guest.id}-${idx}`,
            title: `${item.title} × ${guestPool.count}`,
            meta: item.date || '',
            price: guestPool.count * guestPool.pricePerTicket,
          };
        }
      }

      if (item.guestAgePrices) {
        const guestAgePrice = item.guestAgePrices.find((gp: any) => gp.guestId === guest.id);
        if (guestAgePrice && guestAgePrice.count > 0) {
          return {
            key: `${item.id}-${guest.id}-${idx}`,
            title: item.title,
            meta: '',
            price: guestAgePrice.count * guestAgePrice.pricePerTicket,
          };
        }
      }

      return null;
    })
    .filter(Boolean) as Array<{ key: string; title: string; meta: string; price: number }>;
}

function getCommonServiceRows(cartItems: any[]) {
  return cartItems
    .filter(item => item.id === 'bath' || item.id === 'spa')
    .map(item => {
      const specialist = item.specialist === 'Любой'
        ? item.id === 'bath' ? 'любой специалист' : 'Любой специалист'
        : item.specialist;
      const details = item.id === 'bath'
        ? `${item.date}, ${item.time}, ${specialist}`
        : `${item.date}, ${item.time}, ${specialist}`;
      const banyaMeta = item.id === 'bath'
        ? `${formatGuests(item.guests || getBanyaGuests(item.extraGuest || 0))} • ${item.hours || getBanyaHours(item.extraHour || 0)} часа`
        : '';

      return {
        key: item.cartItemId || item.id,
        title: item.title,
        meta: banyaMeta ? `${details}; ${banyaMeta}` : details,
        price: item.finalPrice,
      };
    });
}

function getCartGuestTitle(guest: typeof GUESTS[number]) {
  const place = guest.type === 'child' ? 'на дополнительном месте' : 'на основном месте';
  return `${guest.name} ${place}`;
}

// --- COMPONENTS ---

export default function App() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);
  const [showHeaderShadow, setShowHeaderShadow] = useState(false);
  const [showFooterShadow, setShowFooterShadow] = useState(false);
  const [isMobileCartExpanded, setIsMobileCartExpanded] = useState(false);
  const [isRoomDetailsExpanded, setIsRoomDetailsExpanded] = useState(true);
  const [infoService, setInfoService] = useState<any | null>(null);
  const cartScrollRef = React.useRef<HTMLDivElement>(null);

  const roomPrice = GUESTS.reduce((sum, guest) => sum + guest.tariffPrice, 0);

  const cartServicesTotal = cartItems.reduce((sum, item) => sum + item.finalPrice, 0);
  const grandTotal = roomPrice + cartServicesTotal;
  const commonServiceRows = getCommonServiceRows(cartItems);

  const handleCartScroll = () => {
    if (!cartScrollRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = cartScrollRef.current;
    setShowHeaderShadow(scrollTop > 0);
    setShowFooterShadow(scrollTop + clientHeight < scrollHeight - 1);
  };

  const handleStartInlineConfig = (serviceId: string) => {
    const service = SERVICES.find(s => s.id === serviceId);

    if (service?.configType === 'age_price_live' && service.prefillBookingGuests) {
      setCartItems(prev => {
        const hasExistingConfig = prev.some(item => item.id === serviceId);
        if (hasExistingConfig) {
          return prev;
        }

        return [...prev, getAgePriceCartItem(service, MAX_ADULTS, MAX_CHILDREN)];
      });
    }

    setExpandedServiceId(serviceId);
  };

  const handleAddToCart = (configuredService: any) => {
    if (configuredService.configType === 'per_guest') {
      // Per-guest services replace the previous configuration.
      setCartItems(prev => {
        const filtered = prev.filter(item => item.id !== configuredService.id);

        // Check if the service has valid values before adding
        const hasValidValues = (configuredService.adultCount > 0 || configuredService.childCount > 0);

        if (hasValidValues) {
          return [...filtered, configuredService];
        }
        return filtered;
      });
    } else {
      // For banya, spa, and pool, can add multiple
      if (configuredService.isEditing) {
        // Update existing
        setCartItems(prev => prev.map(item =>
          item.cartItemId === configuredService.cartItemId ? configuredService : item
        ));
      } else {
        // Add new
        const cartItemId = Date.now();
        setCartItems(prev => [...prev, { ...configuredService, cartItemId }]);
      }
    }
    setExpandedServiceId(null);
  };

  const handleLiveCartUpdate = React.useCallback((configuredService: any) => {
    const hasValidValues = (configuredService.adultCount > 0 || configuredService.childCount > 0);

    if (!hasValidValues && configuredService.prefillBookingGuests) {
      setExpandedServiceId(current => current === configuredService.id ? null : current);
    }

    setCartItems(prev => {
      const filtered = prev.filter(item => item.id !== configuredService.id);

      if (!hasValidValues) {
        return filtered;
      }

      return [...filtered, configuredService];
    });
  }, []);

  const handleRemoveFromCart = (cartItemId: string | number) => {
    setCartItems(prev => prev.filter(item =>
      item.cartItemId ? item.cartItemId !== cartItemId : item.id !== cartItemId
    ));
  };

  const handleEditCartItem = (item: any) => {
    const service = SERVICES.find(s => s.id === item.id);
    if (service) {
      setExpandedServiceId(service.id);
    }
  };

  return (
    <div className="tl-page-shell min-h-screen flex flex-col pb-[132px] md:pb-0">

      {/* Top Utility Header */}
      <header className="tl-topbar px-4 py-4 border-b sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-4 max-w-[1360px] mx-auto items-start justify-between max-[580px]:items-stretch">
          <div className="flex flex-wrap gap-3 max-[580px]:w-full">
            <div className="tl-toolbar-chip px-[16px] py-[6px]">
              <div className="text-muted-foreground" style={{ fontSize: '12px', lineHeight: '16px', fontWeight: 'var(--font-weight-normal)' }}>Заезд — Выезд</div>
              <div className="text-foreground" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 'var(--font-weight-normal)' }}>16 апреля — 22 апреля</div>
            </div>
            <div className="tl-toolbar-chip px-[16px] py-[6px]">
              <div className="text-muted-foreground" style={{ fontSize: '12px', lineHeight: '16px', fontWeight: 'var(--font-weight-normal)' }}>Гости</div>
              <div className="text-foreground" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 'var(--font-weight-normal)' }}>2 взрослых, 1 ребенок</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 max-[580px]:w-full max-[580px]:justify-start">
	            <button className="tl-clear-button px-3 flex items-center gap-[8px] transition-colors">
	              <Lock size={16} className="text-primary" />
	              <span className="text-primary max-[580px]:hidden" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 'var(--font-weight-normal)' }}>Ввести промокод</span>
            </button>
            <button className="tl-secondary-button h-10 px-3 flex items-center justify-center transition-colors">
              <span style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 'var(--font-weight-normal)' }}>RUB</span>
            </button>
	            <button className="tl-clear-button px-3 flex items-center gap-[8px] transition-colors">
	              <User size={16} className="text-primary" />
	              <span className="text-primary max-[580px]:hidden" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 'var(--font-weight-normal)' }}>Войти</span>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <div className="tl-stepbar px-4 py-4 sm:px-6 lg:px-8">
        <div className="max-w-[1360px] mx-auto flex flex-wrap items-center justify-between gap-3 max-[580px]:justify-start">
	          <button className="tl-clear-button px-3 flex items-center gap-[8px] transition-colors">
	            <ChevronLeft size={16} />
	            <span style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 'var(--font-weight-normal)' }}>Назад</span>
          </button>
          <h1 className="flex-1 text-center text-foreground max-[580px]:order-first max-[580px]:w-full max-[580px]:flex-none" style={{ fontSize: '24px', lineHeight: '32px', fontWeight: 'var(--font-weight-normal)' }}>
            Закажите услуги
          </h1>
	          <button className="tl-clear-button px-3 flex items-center gap-[8px] transition-colors">
	            <span className="max-[639px]:hidden" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 'var(--font-weight-normal)' }}>Продолжить бронирование</span>
            <span className="min-[640px]:hidden" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 'var(--font-weight-normal)' }}>Далее</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 px-4 py-4 sm:px-6 sm:py-6 lg:px-8 pb-[28px] md:pb-6">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_286px] gap-4 lg:gap-6">

          {/* Room Card + Services Section */}
          <div>
            {/* Room Card */}
            <div className="tl-card overflow-hidden mb-4 md:mb-6 flex flex-col min-[580px]:flex-row">
              <div className="flex-1 p-[20px]">
                <div className="flex items-start justify-between mb-[12px]">
                  <div className="flex-1">
                    <h2 className="tl-title mb-[8px]" style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 'var(--font-weight-normal)' }}>
                      Стандарт с двуспальной кроватью
                    </h2>
                    <div className="tl-meta flex flex-wrap items-center gap-[12px] mb-[12px]">
                      <div className="flex items-center gap-[4px]">
                        <Users size={14} />
                        <span style={{ fontSize: '12px', lineHeight: '16px' }}>до 3 мест</span>
                      </div>
                      <div className="flex items-center gap-[4px]">
                        <span style={{ fontSize: '12px', lineHeight: '16px' }}>58 кв. м.</span>
                      </div>
                      <div className="flex items-center gap-[4px]">
                        <span style={{ fontSize: '12px', lineHeight: '16px' }}>1 комн.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tl-meta flex gap-[16px] flex-wrap mb-[16px]">
                  <div className="flex items-center gap-[6px]">
                    <Bath size={14} />
                    <span style={{ fontSize: '12px', lineHeight: '16px' }}>Ванная комната</span>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <Wifi size={14} />
                    <span style={{ fontSize: '12px', lineHeight: '16px' }}>Wi-Fi</span>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <Wind size={14} />
                    <span style={{ fontSize: '12px', lineHeight: '16px' }}>Фен</span>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <Car size={14} />
                    <span style={{ fontSize: '12px', lineHeight: '16px' }}>Парковка</span>
                  </div>
                </div>
              </div>
              <img
                src={roomImage}
                alt="Стандарт с двуспальной кроватью"
                className="w-full h-[180px] min-[580px]:w-[160px] min-[580px]:h-[160px] object-cover"
              />
            </div>

            {/* Services Section */}
	            <div className="tl-services-list">
	              {SERVICES.map(service => {
	                const serviceItems = cartItems.filter(item => item.id === service.id);
	                const isSelected = serviceItems.length > 0;
	                const isExpanded = expandedServiceId === service.id;
	                const isLiveAgePrice = service.configType === 'age_price_live';
	                const showAddButton = !isSelected;
	                const showMoreButton = isSelected && service.configType !== 'per_guest' && !isLiveAgePrice;
	                const selectedPrice = serviceItems.reduce((sum, item) => sum + item.finalPrice, 0);

                return (
		                  <article
		                    key={service.id}
		                    className={cn(
		                      "tl-card tl-service-card transition-all",
		                      isSelected ? "tl-service-card-selected" : ""
		                    )}
		                  >
		                    <img src={service.image} alt={service.title} className="tl-service-card-image" />

		                    <div className="tl-service-content">
			                      <button
                            type="button"
                            className="tl-service-title-row"
                            aria-label={`Подробнее об услуге: ${service.title}`}
                            title={`Подробнее об услуге: ${service.title}`}
                            onClick={() => setInfoService(service)}
                          >
			                        <h3 className="tl-title" style={{ fontSize: '20px', lineHeight: '26px', fontWeight: 'var(--font-weight-normal)' }}>
			                          {service.title}
			                        </h3>
			                        <span className="tl-service-link-button" aria-hidden="true">
			                          <ExternalLink size={16} />
			                        </span>
			                      </button>

		                      {!isLiveAgePrice && (
		                        <div className="tl-service-meta">
		                          {service.features.map((f, i) => (
		                            <span key={i}>
		                              {f.icon}
		                              {f.text}
		                            </span>
		                          ))}
		                        </div>
		                      )}

		                      <p className="tl-service-description">
		                        {service.description}
		                      </p>
		                    </div>

		                    {isExpanded && (
		                      <InlineServiceConfigurator
		                        service={service}
		                        existingItems={serviceItems}
		                        existingConfig={service.configType === 'per_guest' || isLiveAgePrice ? serviceItems[0] : null}
		                        onClose={() => setExpandedServiceId(null)}
		                        onSave={handleAddToCart}
		                        onLiveUpdate={handleLiveCartUpdate}
		                        onRemove={handleRemoveFromCart}
		                      />
		                    )}

		                    {!isExpanded && isSelected && !isLiveAgePrice && (
		                      <SelectedServiceSummary
		                        service={service}
		                        items={serviceItems}
		                        onAddMore={() => handleStartInlineConfig(service.id)}
		                        onEdit={() => handleEditCartItem(serviceItems[0])}
		                        onRemove={handleRemoveFromCart}
		                      />
		                    )}

		                    {!isExpanded && (!isSelected || isLiveAgePrice) && (
		                      <div className="tl-service-footer">
		                      <div className="tl-service-footer-meta">
		                        {service.priceLabel}
		                      </div>

		                      <div className="tl-service-price-action">
		                        <div className="tl-price" style={{ fontSize: '20px', lineHeight: '26px', fontWeight: 'var(--font-weight-normal)' }}>
		                          <span className="tl-meta" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 'var(--font-weight-normal)' }}>{service.showFromPrice && !isSelected && 'от '}</span>{isSelected ? selectedPrice.toLocaleString('ru-RU') : service.basePrice.toLocaleString('ru-RU')} ₽
		                        </div>

		                        {showAddButton ? (
		                          <button
		                            onClick={() => handleStartInlineConfig(service.id)}
		                            aria-label={`Добавить услугу: ${service.title}`}
		                            title={`Добавить услугу: ${service.title}`}
		                            className="tl-primary-button min-w-[128px] transition-all flex items-center justify-center"
		                          >
		                            <span style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 'var(--font-weight-normal)' }}>Добавить</span>
		                          </button>
		                        ) : (
		                          <div className="flex items-center gap-[8px]">
		                            {service.configType === 'per_guest' && (
		                              <button
		                                onClick={() => handleStartInlineConfig(service.id)}
		                                aria-label={`Изменить услугу: ${service.title}`}
		                                title={`Изменить услугу: ${service.title}`}
		                                className="tl-secondary-button w-10 h-10 transition-colors flex items-center justify-center"
		                              >
		                                <Pencil size={16} />
		                              </button>
		                            )}
		                            {showMoreButton && (
		                              <button
		                                onClick={() => handleStartInlineConfig(service.id)}
			                                className="tl-secondary-button min-w-[88px] transition-colors flex items-center justify-center gap-[6px]"
		                              >
		                                <Plus size={16} />
		                                <span style={{ fontSize: '14px', lineHeight: '20px' }}>Еще</span>
		                              </button>
		                            )}
		                          </div>
		                        )}
		                      </div>
		                      </div>
		                    )}
		                  </article>
                );
              })}
            </div>
          </div>

          {/* Cart Section */}
          <div className="hidden md:block">
            <div className="sticky top-[24px]">
	              <div className="tl-card tl-cart-card overflow-hidden">
	                <div
	                  className="px-[24px] py-[26px] bg-card transition-shadow duration-200"
	                  style={{
	                    boxShadow: showHeaderShadow ? '0 2px 8px rgba(0, 0, 0, 0.08)' : 'none',
                    position: 'relative',
                    zIndex: 1
	                  }}
	                >
	                  <h2 className="tl-cart-title">
	                    Ваше бронирование
	                  </h2>
	                </div>

                <div
                  ref={cartScrollRef}
                  onScroll={handleCartScroll}
                  className="max-h-[600px] overflow-y-auto"
                >
                  {/* Booking Info */}
	                  <div className="tl-cart-strip px-[24px] py-[9px]">
	                    <div className="tl-cart-subtitle">
	                      6 ночей, 3 гостя
	                    </div>
	                  </div>

	                  {/* Dates */}
	                  <div className="tl-cart-dates px-[24px] py-[14px]">
	                    <div className="flex items-start justify-between">
	                      <div>
	                        <div className="text-foreground" style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 'var(--font-weight-normal)' }}>
	                          16
	                        </div>
	                        <div className="tl-meta" style={{ fontSize: '13px', lineHeight: '16px' }}>апреля</div>
                        <div className="tl-meta" style={{ fontSize: '12px', lineHeight: '16px' }}>Понедельник</div>
                        <div className="tl-meta" style={{ fontSize: '12px', lineHeight: '16px' }}>с 14:00</div>
	                      </div>
	                      <div className="text-muted-foreground">—</div>
	                      <div className="text-right">
	                        <div className="text-foreground" style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 'var(--font-weight-normal)' }}>
	                          22
	                        </div>
                        <div className="tl-meta" style={{ fontSize: '12px', lineHeight: '16px' }}>апреля</div>
                        <div className="tl-meta" style={{ fontSize: '12px', lineHeight: '16px' }}>Воскресенье</div>
                        <div className="tl-meta" style={{ fontSize: '12px', lineHeight: '16px' }}>до 12:00</div>
                      </div>
	                    </div>
	                  </div>

	                  {/* Room, guests, tariffs and services */}
		                  <div className="tl-cart-room">
		                    <div className="tl-cart-room-summary px-[24px] py-[14px]">
		                      <div className="tl-cart-row mb-[4px]">
		                        <div className="tl-cart-subtitle">Номер:</div>
		                        <div className="tl-cart-label whitespace-nowrap">{grandTotal.toLocaleString('ru-RU')} ₽</div>
		                      </div>
		                      <button
		                        type="button"
		                        className="tl-cart-link-button inline-flex items-start gap-1 text-left"
		                        aria-expanded={isRoomDetailsExpanded}
		                        onClick={() => setIsRoomDetailsExpanded((value) => !value)}
		                      >
		                        <span className="tl-cart-link tl-cart-subtitle">
		                          Стандарт с двуспальной кроватью
		                        </span>
		                        <ChevronRight
		                          size={14}
		                          className={cn('mt-[2px] text-primary shrink-0 transition-transform', isRoomDetailsExpanded ? '-rotate-90' : 'rotate-90')}
		                        />
		                      </button>
		                    </div>

		                    {isRoomDetailsExpanded && (
		                      <div className="tl-cart-room-body px-[24px] py-[14px]">
		                        {GUESTS.map((guest) => {
		                          const rows = getGuestServiceRows(cartItems, guest);

		                          return (
		                            <div key={guest.id} className="tl-cart-guest-block space-y-[8px]">
		                              <div className="tl-cart-subtitle">
		                                {getCartGuestTitle(guest)}
		                              </div>
		                              <div className="tl-cart-row">
		                                <div className="tl-cart-label min-w-0">{guest.tariff}</div>
		                                <div className="tl-cart-label whitespace-nowrap">{guest.tariffPrice.toLocaleString('ru-RU')} ₽</div>
		                              </div>
		                              {rows.map((row) => (
		                                <div key={row.key} className="tl-cart-row">
		                                  <div className="min-w-0">
		                                    <div className="tl-cart-label">{row.title}</div>
		                                    {row.meta && <div className="tl-meta" style={{ fontSize: '12px', lineHeight: '16px' }}>{row.meta}</div>}
		                                  </div>
		                                  <div className="tl-cart-label whitespace-nowrap">{row.price.toLocaleString('ru-RU')} ₽</div>
		                                </div>
		                              ))}
		                            </div>
		                          );
		                        })}

		                        {commonServiceRows.length > 0 && (
		                          <div className="tl-cart-common-services space-y-[8px]">
		                            <div className="tl-cart-subtitle">Услуги</div>
		                            {commonServiceRows.map((row) => (
		                              <div key={row.key} className="tl-cart-row">
		                                <div className="min-w-0">
		                                  <div className="tl-cart-label">{row.title}</div>
		                                  <div className="tl-meta" style={{ fontSize: '12px', lineHeight: '16px' }}>{row.meta}</div>
		                                </div>
		                                <div className="tl-cart-label whitespace-nowrap">{row.price.toLocaleString('ru-RU')} ₽</div>
		                              </div>
		                            ))}
		                          </div>
		                        )}
		                      </div>
		                    )}
		                  </div>
	                </div>

	                <div
	                  className="tl-cart-footer px-[24px] py-[20px] transition-shadow duration-200"
                  style={{
                    boxShadow: showFooterShadow ? '0 -2px 8px rgba(0, 0, 0, 0.08)' : 'none',
                    position: 'relative',
                    zIndex: 1,
                    backgroundColor: 'var(--color-card)'
                  }}
                >
                  <div className="flex items-center justify-end mb-[16px]">
                    <span className="tl-price" style={{ fontSize: '24px', lineHeight: '32px', fontWeight: 'var(--font-weight-normal)' }}>
                      {grandTotal.toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                  <div className="tl-meta mb-[16px]" style={{ fontSize: '12px', lineHeight: '16px' }}>
                    Налоги и сборы включены
                  </div>
                  <button className="tl-primary-button w-full py-[10px] transition-all" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 'var(--font-weight-normal)' }}>
                    Продолжить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <MobileBookingCart
        cartItems={cartItems}
        roomPrice={roomPrice}
        grandTotal={grandTotal}
        isExpanded={isMobileCartExpanded}
        onToggle={() => setIsMobileCartExpanded(prev => !prev)}
      />

      {infoService && (
        <ServiceInfoModal
          service={infoService}
          onClose={() => setInfoService(null)}
        />
      )}

    </div>
  );
}

function ServiceInfoModal({ service, onClose }: any) {
  return (
    <div
      className="tl-info-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="tl-info-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-info-title"
      >
        <img src={service.image} alt={service.title} className="tl-info-modal-image" />
        <div className="tl-info-modal-body">
          <h2 id="service-info-title" className="tl-title tl-info-modal-title">
            {service.title}
          </h2>
          <p className="tl-info-modal-description">
            {service.description}
          </p>
        </div>
        <footer className="tl-info-modal-footer">
          <button
            type="button"
            className="tl-primary-button tl-info-modal-close"
            onClick={onClose}
          >
            Закрыть
          </button>
        </footer>
      </section>
    </div>
  );
}

function MobileBookingCart({ cartItems, roomPrice, grandTotal, isExpanded, onToggle }: any) {
  const commonRows = getCommonServiceRows(cartItems);

  return (
    <aside className="fixed bottom-0 left-0 right-0 z-40 bg-card shadow-[0px_-2px_8px_0px_rgba(0,0,0,0.18)] md:hidden">
      {isExpanded && (
        <div className="border-b border-border max-h-[60vh] overflow-y-auto">
          <div className="p-4 bg-card">
            <h2 className="text-foreground" style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'var(--font-weight-normal)' }}>
              Ваше бронирование
            </h2>
          </div>

          <div className="px-4 py-2 tl-soft-panel">
            <div className="text-foreground" style={{ fontSize: '13px', lineHeight: '18px', fontWeight: 'var(--font-weight-medium)' }}>
              6 ночей, 3 гостя
            </div>
          </div>

          <div className="px-4 py-4 border-b border-border bg-card">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-foreground" style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 'var(--font-weight-medium)' }}>
                  16 <span className="text-muted-foreground" style={{ fontSize: '13px', lineHeight: '16px', fontWeight: 'var(--font-weight-normal)' }}>апреля</span>
                </div>
                <div className="tl-meta" style={{ fontSize: '12px', lineHeight: '16px' }}>Понедельник</div>
                <div className="tl-meta" style={{ fontSize: '12px', lineHeight: '16px' }}>с 14:00</div>
              </div>
              <div className="pt-1 text-muted-foreground">—</div>
              <div className="text-right">
                <div className="text-foreground" style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 'var(--font-weight-medium)' }}>
                  22 <span className="text-muted-foreground" style={{ fontSize: '13px', lineHeight: '16px', fontWeight: 'var(--font-weight-normal)' }}>апреля</span>
                </div>
                <div className="tl-meta" style={{ fontSize: '12px', lineHeight: '16px' }}>Воскресенье</div>
                <div className="tl-meta" style={{ fontSize: '12px', lineHeight: '16px' }}>до 12:00</div>
              </div>
            </div>
          </div>

          <div className="px-4 py-3 bg-[#e8f2ff] border-b border-border">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="text-card-foreground mb-1" style={{ fontSize: '13px', lineHeight: '18px', fontWeight: 'var(--font-weight-medium)' }}>
                  Номер
                </div>
                <div className="text-primary" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 'var(--font-weight-medium)' }}>
                  Стандарт с двуспальной кроватью
                </div>
              </div>
              <div className="text-card-foreground whitespace-nowrap" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 'var(--font-weight-normal)' }}>
                {roomPrice.toLocaleString('ru-RU')} ₽
              </div>
            </div>
          </div>

          {GUESTS.map(guest => {
            const rows = getGuestServiceRows(cartItems, guest);

            return (
              <div key={guest.id} className="tl-mobile-cart-guest-block px-4 py-3 space-y-3">
                <div className="text-card-foreground" style={{ fontSize: '13px', lineHeight: '18px', fontWeight: 'var(--font-weight-medium)' }}>
                  {guest.name}
                </div>
                <div className="flex items-start justify-between gap-3">
                  <div className="text-card-foreground" style={{ fontSize: '13px', lineHeight: '18px' }}>{guest.tariff}</div>
                  <div className="text-card-foreground whitespace-nowrap" style={{ fontSize: '13px', lineHeight: '18px', fontWeight: 'var(--font-weight-normal)' }}>
                    {guest.tariffPrice.toLocaleString('ru-RU')} ₽
                  </div>
                </div>

                {rows.map(row => (
                  <div key={row.key} className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="text-card-foreground" style={{ fontSize: '13px', lineHeight: '18px' }}>{row.title}</div>
                      {row.meta && (
                        <div className="text-muted-foreground" style={{ fontSize: '12px', lineHeight: '16px' }}>{row.meta}</div>
                      )}
                    </div>
                    <div className="text-card-foreground whitespace-nowrap" style={{ fontSize: '13px', lineHeight: '18px', fontWeight: 'var(--font-weight-normal)' }}>
                      {row.price.toLocaleString('ru-RU')} ₽
                    </div>
                  </div>
                ))}
              </div>
            );
          })}

          {commonRows.length > 0 && (
            <div className="tl-mobile-cart-common-block border-b border-border">
              <div className="px-4 pt-3">
                <div className="text-card-foreground" style={{ fontSize: '13px', lineHeight: '18px', fontWeight: 'var(--font-weight-medium)' }}>
                  Услуги
                </div>
              </div>
              <div className="px-4 py-3 space-y-3">
                {commonRows.map(row => (
                  <div key={row.key} className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="text-card-foreground" style={{ fontSize: '13px', lineHeight: '18px' }}>{row.title}</div>
                      <div className="text-muted-foreground" style={{ fontSize: '12px', lineHeight: '16px' }}>{row.meta}</div>
                    </div>
                    <div className="text-card-foreground whitespace-nowrap" style={{ fontSize: '13px', lineHeight: '18px', fontWeight: 'var(--font-weight-normal)' }}>
                      {row.price.toLocaleString('ru-RU')} ₽
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <div className="tl-mobile-cart-footer px-4 py-3">
        <div className="tl-mobile-cart-summary mb-3">
          <div className="tl-mobile-cart-date-chip">
            <div>16 апр. — 22 апр.</div>
            <span>1 номер, 3 гостя</span>
          </div>

          <div className="tl-mobile-cart-total">
            <div className="min-w-0 text-right">
              <div className="tl-price" style={{ fontSize: '28px', lineHeight: '34px', fontWeight: 'var(--font-weight-normal)' }}>
                {grandTotal.toLocaleString('ru-RU')} ₽
              </div>
              <div className="tl-meta" style={{ fontSize: '13px', lineHeight: '18px' }}>
                Сборы не включены
              </div>
            </div>

            <button
              onClick={onToggle}
              aria-label={isExpanded ? 'Свернуть корзину' : 'Развернуть корзину'}
              title={isExpanded ? 'Свернуть корзину' : 'Развернуть корзину'}
              className="tl-mobile-cart-toggle transition-colors"
            >
              <ChevronRight size={24} className={cn('transition-transform', isExpanded ? 'rotate-90' : '-rotate-90')} />
            </button>
          </div>
        </div>

        <button className="tl-primary-button tl-mobile-cart-continue w-full transition-all" style={{ fontWeight: 'var(--font-weight-normal)' }}>
          Продолжить
        </button>
      </div>
    </aside>
  );
}

function getDateParts(date: string) {
  const [day, month] = date.split(' ');
  const dateObj = new Date(`2026-04-${day.padStart(2, '0')}`);
  const dayOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'][dateObj.getDay()];

  return { day, month, dayOfWeek };
}

function SelectedServiceSummary({ service, items, onAddMore, onEdit, onRemove }: any) {
  if (items.length === 0) return null;

  return (
    <div className="tl-service-added">
      {items.map((item: any) => {
        const isBreakfast = service.configType === 'per_guest';
        const isBanya = service.configType === 'banya';
        const isPool = service.configType === 'pool';
        const guestsLabel = isBreakfast
          ? item.priceLabel
          : isBanya
            ? `${formatGuests(item.guests || getBanyaGuests(item.extraGuest || 0))} • ${item.hours || getBanyaHours(item.extraHour || 0)} часа`
            : isPool
              ? item.priceLabel
              : '1 гость • 2 часа';
        const detailLabel = isBreakfast
          ? ''
          : isPool
            ? item.date
            : `${item.date} • ${item.time}`;
        const removeId = item.cartItemId || item.id;

        return (
          <div key={removeId} className="tl-service-added-row">
            <div className="min-w-0">
              <div className="tl-service-added-meta">{guestsLabel}</div>
              {detailLabel && <div className="tl-service-added-date">{detailLabel}</div>}
            </div>
            <div className="tl-service-added-actions">
              <span className="tl-price" style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 'var(--font-weight-normal)' }}>
                {item.finalPrice.toLocaleString('ru-RU')} ₽
              </span>
              <button
                type="button"
                onClick={() => onRemove(removeId)}
                className="tl-icon-button"
                aria-label={`Удалить услугу: ${service.title}`}
                title={`Удалить услугу: ${service.title}`}
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        );
      })}

      {service.configType === 'per_guest' ? (
        <button type="button" onClick={onEdit} className="tl-service-add-more">
          Изменить
        </button>
      ) : (
        <button type="button" onClick={onAddMore} className="tl-service-add-more">
          Добавить еще
        </button>
      )}
    </div>
  );
}

function InlineCounter({ title, hint, value, min = 0, max, onChange }: any) {
  return (
    <div className="tl-inline-counter">
      <div className="min-w-0">
        <div className="tl-inline-label">{title}</div>
        {hint && <div className="tl-inline-hint">{hint}</div>}
      </div>
      <div className="tl-stepper">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value === min}
          className="tl-stepper-button"
          aria-label={`Уменьшить: ${title}`}
        >
          -
        </button>
        <span className="tl-stepper-value">{value}</span>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value === max}
          className="tl-stepper-button"
          aria-label={`Увеличить: ${title}`}
        >
          +
        </button>
      </div>
    </div>
  );
}

function AgePriceCounter({ title, price, unit, rateLabel, value, min = 0, max, disabled = false, onChange }: any) {
  const subtotal = value * price;

  return (
    <div className={cn('tl-age-price-row', disabled ? 'tl-age-price-row-disabled' : '')}>
      <div className="tl-age-price-info">
        <div className="tl-age-price-title">{title}</div>
        <div className="tl-age-price-rate">
          {rateLabel ?? `${price.toLocaleString('ru-RU')} ₽${unit ? ` ${unit}` : ''}`}
        </div>
      </div>
      <div className="tl-age-price-subtotal">
        {subtotal.toLocaleString('ru-RU')} ₽
      </div>
      <div className="tl-stepper">
        <button
          type="button"
          onClick={() => {
            if (!disabled) {
              onChange(Math.max(min, value - 1));
            }
          }}
          disabled={disabled || value === min}
          className="tl-stepper-button"
          aria-label={`Уменьшить: ${title}`}
        >
          -
        </button>
        <span className="tl-stepper-value">{value}</span>
        <button
          type="button"
          onClick={() => {
            if (!disabled) {
              onChange(Math.min(max, value + 1));
            }
          }}
          disabled={disabled || value === max}
          className="tl-stepper-button"
          aria-label={`Увеличить: ${title}`}
        >
          +
        </button>
      </div>
    </div>
  );
}

function InlineDateStrip({ dates, value, disabledDates = [], onChange }: any) {
  return (
    <div className="tl-inline-date-strip">
      {dates.map((date: string) => {
        const isDisabled = disabledDates.includes(date);
        const { day, dayOfWeek } = getDateParts(date);

        return (
          <button
            key={date}
            type="button"
            onClick={() => !isDisabled && onChange(date)}
            disabled={isDisabled}
            className={cn(
              'tl-inline-date',
              value === date ? 'tl-inline-date-active' : '',
              isDisabled ? 'tl-inline-date-disabled' : ''
            )}
          >
            <span>{dayOfWeek}</span>
            <strong>{day}</strong>
          </button>
        );
      })}
    </div>
  );
}

function InlineTimeSlots({ slots, value, onChange }: any) {
  if (slots.length === 0) {
    return (
      <div className="tl-inline-empty">
        На выбранную дату нет свободных слотов.
      </div>
    );
  }

  return (
    <div className="tl-inline-times">
      {slots.map((time: string) => (
        <button
          key={time}
          type="button"
          onClick={() => onChange(time)}
          className={cn('tl-inline-time', value === time ? 'tl-inline-time-active' : '')}
        >
          {time}
        </button>
      ))}
    </div>
  );
}

function InlineServiceConfigurator({ service, existingItems, existingConfig, onClose, onSave, onLiveUpdate, onRemove }: any) {
  const DAYS = 6;
  const isScheduled = service.configType === 'banya' || service.configType === 'spa';
  const isLiveAgePrice = service.configType === 'age_price_live';
  const shouldPrefillBookingGuests = Boolean(service.prefillBookingGuests);
  const ageAdultPrice = getAgePriceAdultPrice(service);
  const ageChildPrice = getAgePriceChildPrice(service);

  const [adultCount, setAdultCount] = useState<number>(existingConfig?.adultCount ?? (isLiveAgePrice ? (shouldPrefillBookingGuests ? MAX_ADULTS : 0) : MAX_ADULTS));
  const [childCount, setChildCount] = useState<number>(existingConfig?.childCount ?? (isLiveAgePrice ? (shouldPrefillBookingGuests ? MAX_CHILDREN : 0) : MAX_CHILDREN));
  const [banyaExtraGuest, setBanyaExtraGuest] = useState<number>(0);
  const [banyaExtraHour, setBanyaExtraHour] = useState<number>(0);
  const [banyaDate, setBanyaDate] = useState<string>(DATES[0]);
  const [banyaTime, setBanyaTime] = useState<string>('');
  const [banyaSpecialist, setBanyaSpecialist] = useState<string>(SPECIALISTS[0]);
  const [spaDate, setSpaDate] = useState<string>(DATES[0]);
  const [spaTime, setSpaTime] = useState<string>('');
  const [spaSpecialist, setSpaSpecialist] = useState<string>(SPECIALISTS[0]);
  const [poolAdultCount, setPoolAdultCount] = useState<number>(2);
  const [poolChildCount, setPoolChildCount] = useState<number>(1);
  const [poolDate, setPoolDate] = useState<string>(DATES[0]);

  const getBanyaAvailableTimeSlots = (date: string) => {
    const dateIndex = DATES.indexOf(date);
    let baseSlots = TIME_SLOTS;

    switch (dateIndex) {
      case 0:
        baseSlots = TIME_SLOTS.filter((_, idx) => idx !== 2);
        break;
      case 1:
        baseSlots = ['10:00', '14:00', '18:00'];
        break;
      case 2:
        baseSlots = [];
        break;
      case 3:
        baseSlots = TIME_SLOTS.filter((_, idx) => idx !== 4);
        break;
      case 4:
        baseSlots = [];
        break;
      case 5:
        baseSlots = ['12:00', '20:00'];
        break;
      default:
        baseSlots = TIME_SLOTS;
    }

    const bookedSlots = new Set(
      existingItems
        .filter((item: any) => item.date === date)
        .map((item: any) => item.time)
    );

    return baseSlots.filter(time => !bookedSlots.has(time));
  };

  const getSpaAvailableTimeSlots = (date: string) => {
    return TIME_SLOTS.filter((time) => getSpaAvailableSpecialists(date, time).length > 0);
  };

  const getSpaAvailableSpecialists = (date: string, time: string) => {
    const bookedSpecificSpecialists = new Set(
      existingItems
        .filter((item: any) => item.date === date && item.time === time && item.specialist !== ANY_SPECIALIST)
        .map((item: any) => item.specialist)
    );
    const anonymousBookings = existingItems.filter(
      (item: any) => item.date === date && item.time === time && item.specialist === ANY_SPECIALIST
    ).length;
    const availableSpecialists = SPA_SPECIALISTS.filter(
      (specialist) => getSpaBaseTimeSlotsForSpecialist(date, specialist).includes(time) && !bookedSpecificSpecialists.has(specialist)
    );

    return availableSpecialists.slice(anonymousBookings);
  };

  const availableTimeSlots = service.configType === 'banya'
    ? getBanyaAvailableTimeSlots(banyaDate)
    : service.configType === 'spa'
      ? getSpaAvailableTimeSlots(spaDate)
      : TIME_SLOTS;

  const selectedDate = service.configType === 'banya'
    ? banyaDate
    : service.configType === 'spa'
      ? spaDate
      : poolDate;
  const selectedTime = service.configType === 'banya' ? banyaTime : spaTime;

  let finalPrice = service.basePrice;
  let priceDetails = service.priceLabel;

  if (service.configType === 'per_guest') {
    finalPrice = (adultCount * BREAKFAST_ADULT_PRICE + childCount * BREAKFAST_CHILD_PRICE) * DAYS;
    priceDetails = `${formatGuests(adultCount + childCount)} • ${DAYS} дней`;
  } else if (isLiveAgePrice) {
    finalPrice = adultCount * ageAdultPrice + childCount * ageChildPrice;
    priceDetails = formatGuests(adultCount + childCount);
  } else if (service.configType === 'banya') {
    const totalGuests = getBanyaGuests(banyaExtraGuest);
    const totalHours = getBanyaHours(banyaExtraHour);
    finalPrice = getBanyaPrice(banyaExtraGuest, banyaExtraHour);
    priceDetails = `${formatGuests(totalGuests)} • ${totalHours} часа`;
  } else if (service.configType === 'spa') {
    finalPrice = SPA_PRICE;
    priceDetails = '1 гость • 2 часа';
  } else if (service.configType === 'pool') {
    finalPrice = (poolAdultCount * POOL_ADULT_PRICE) + (poolChildCount * POOL_CHILD_PRICE);
    priceDetails = `${poolAdultCount + poolChildCount} билетов • ${poolDate}`;
  }

  const bookedPoolDates = existingItems.map((item: any) => item.date);
  const outOfBookingDates = CALENDAR_STRIP_DATES.filter(date => !DATES.includes(date));
  const unavailableDates = service.configType === 'banya'
    ? DATES.filter(date => getBanyaAvailableTimeSlots(date).length === 0)
    : service.configType === 'spa'
      ? DATES.filter((date) => getSpaAvailableTimeSlots(date).length === 0)
      : service.configType === 'pool'
        ? bookedPoolDates
        : [];
  const disabledDates = [...outOfBookingDates, ...unavailableDates];
  const canSave = isLiveAgePrice ? false : isScheduled ? Boolean(selectedTime) : service.configType === 'pool' ? poolAdultCount + poolChildCount > 0 : adultCount + childCount > 0;

  useEffect(() => {
    if (service.configType === 'banya' && banyaTime && !getBanyaAvailableTimeSlots(banyaDate).includes(banyaTime)) {
      setBanyaTime('');
    }

    if (service.configType === 'spa' && spaTime && !getSpaAvailableTimeSlots(spaDate).includes(spaTime)) {
      setSpaTime('');
    }

    if (
      service.configType === 'spa' &&
      spaTime &&
      spaSpecialist !== ANY_SPECIALIST &&
      !getSpaAvailableSpecialists(spaDate, spaTime).includes(spaSpecialist)
    ) {
      setSpaSpecialist(ANY_SPECIALIST);
    }
  }, [banyaDate, spaDate, spaTime, spaSpecialist, service.configType]);

  useEffect(() => {
    if (service.configType !== 'banya' || banyaTime) return;

    setBanyaExtraHour(0);
    setBanyaExtraGuest(0);
  }, [banyaTime, service.configType]);

  useEffect(() => {
    if (!isLiveAgePrice || !onLiveUpdate) return;

    onLiveUpdate(getAgePriceCartItem(service, adultCount, childCount));
  }, [adultCount, childCount, isLiveAgePrice, onLiveUpdate, service]);

  const handleSave = () => {
    if (!canSave) return;

    if (service.configType === 'per_guest') {
      const guestBreakfasts = [
        ...GUESTS.filter(g => g.type === 'adult').map((g, idx) => ({
          guestId: g.id,
          type: 'adult',
          count: idx < adultCount ? DAYS : 0,
          pricePerDay: BREAKFAST_ADULT_PRICE
        })),
        ...GUESTS.filter(g => g.type === 'child').map((g, idx) => ({
          guestId: g.id,
          type: 'child',
          count: idx < childCount ? DAYS : 0,
          pricePerDay: BREAKFAST_CHILD_PRICE
        }))
      ];

      onSave({ ...service, finalPrice, guestBreakfasts, adultCount, childCount, priceLabel: priceDetails });
      return;
    }

    if (service.configType === 'banya') {
      onSave({
        ...service,
        finalPrice,
        extraGuest: banyaExtraGuest,
        extraHour: banyaExtraHour,
        date: banyaDate,
        time: banyaTime,
        specialist: banyaSpecialist,
        guests: getBanyaGuests(banyaExtraGuest),
        hours: getBanyaHours(banyaExtraHour),
        priceLabel: priceDetails,
        isEditing: false
      });
      return;
    }

    if (service.configType === 'spa') {
      onSave({
        ...service,
        finalPrice,
        date: spaDate,
        time: spaTime,
        specialist: spaSpecialist,
        priceLabel: priceDetails,
        isEditing: false
      });
      return;
    }

    if (service.configType === 'pool') {
      const adultGuests = GUESTS.filter(g => g.type === 'adult');
      const childGuests = GUESTS.filter(g => g.type === 'child');
      const guestPools = [
        ...distributeTicketsByGuest(adultGuests, poolAdultCount, POOL_ADULT_PRICE),
        ...distributeTicketsByGuest(childGuests, poolChildCount, POOL_CHILD_PRICE)
      ];

      onSave({
        ...service,
        finalPrice,
        guestPools,
        priceLabel: priceDetails,
        date: poolDate,
        isEditing: false
      });
    }
  };

  return (
    <div className={cn(
      'tl-inline-config',
      service.configType === 'per_guest' || service.configType === 'pool' || isLiveAgePrice ? 'tl-inline-config-soft' : '',
      isLiveAgePrice ? 'tl-inline-config-live' : ''
    )}>
      {!isLiveAgePrice && (
        <button
          type="button"
          onClick={onClose}
          className="tl-inline-close"
          aria-label="Закрыть настройку услуги"
          title="Закрыть"
        >
          <X size={18} />
        </button>
      )}

      {existingItems.length > 0 && service.configType !== 'per_guest' && !isLiveAgePrice && (
        <div className="tl-inline-existing">
          {existingItems.map((item: any) => (
            <div key={item.cartItemId || item.id} className="tl-inline-existing-row">
              <div className="min-w-0">
                <div className="tl-service-added-meta">
                  {service.configType === 'banya'
                    ? `${formatGuests(item.guests || getBanyaGuests(item.extraGuest || 0))} • ${item.hours || getBanyaHours(item.extraHour || 0)} часа`
                    : service.configType === 'pool'
                      ? item.priceLabel
                      : '1 гость • 2 часа'}
                </div>
                <div className="tl-service-added-date">
                  {service.configType === 'pool' ? item.date : `${item.date} • ${item.time}`}
                </div>
              </div>
              <div className="tl-service-added-actions">
                <span className="tl-price" style={{ fontSize: '16px', lineHeight: '22px', fontWeight: 'var(--font-weight-normal)' }}>
                  {item.finalPrice.toLocaleString('ru-RU')} ₽
                </span>
                <button
                  type="button"
                  onClick={() => onRemove(item.cartItemId || item.id)}
                  className="tl-icon-button"
                  aria-label={`Удалить услугу: ${service.title}`}
                  title={`Удалить услугу: ${service.title}`}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {service.configType === 'per_guest' && (
        <div className="tl-age-price-list">
          <div className="tl-age-price-heading">Количество</div>
          <AgePriceCounter
            title="Взрослый"
            price={BREAKFAST_ADULT_PRICE}
            unit="за день"
            value={adultCount}
            max={MAX_ADULTS}
            onChange={setAdultCount}
          />
          <AgePriceCounter
            title="Ребенок (0-17 лет)"
            price={BREAKFAST_CHILD_PRICE}
            unit="за день"
            value={childCount}
            max={MAX_CHILDREN}
            onChange={setChildCount}
          />
        </div>
      )}

      {isLiveAgePrice && (
        <div className="tl-age-price-list">
          <AgePriceCounter
            title="Взрослый"
            price={ageAdultPrice}
            unit="за билет"
            value={adultCount}
            max={MAX_ADULTS}
            onChange={setAdultCount}
          />
          <AgePriceCounter
            title="Ребенок (0-17 лет)"
            price={ageChildPrice}
            unit="за билет"
            value={childCount}
            max={MAX_CHILDREN}
            onChange={setChildCount}
          />
        </div>
      )}

      {isScheduled && (
        <>
          <div className="tl-inline-field-label">Дата и время</div>
          <div className="tl-inline-calendar-head">
            <span>Апрель 2026</span>
            <div className="tl-inline-calendar-nav">
              <button type="button" aria-label="Предыдущий месяц" title="Предыдущий месяц">
                <ChevronLeft size={18} />
              </button>
              <button type="button" aria-label="Следующий месяц" title="Следующий месяц">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <InlineDateStrip
            dates={CALENDAR_STRIP_DATES}
            value={selectedDate}
            disabledDates={disabledDates}
            onChange={(date: string) => {
              if (service.configType === 'banya') {
                setBanyaDate(date);
                setBanyaTime('');
              } else {
                setSpaDate(date);
                setSpaTime('');
              }
            }}
          />

          <InlineTimeSlots
            slots={availableTimeSlots}
            value={selectedTime}
            onChange={service.configType === 'banya' ? setBanyaTime : setSpaTime}
          />
        </>
      )}

      {service.configType === 'banya' && banyaTime && (
        <div className="tl-age-price-list">
          <AgePriceCounter
            title="Доп. час"
            price={BANYA_EXTRA_HOUR_PRICE}
            rateLabel={`+${BANYA_EXTRA_HOUR_PRICE.toLocaleString('ru-RU')} ₽ за 1 час`}
            value={banyaExtraHour}
            max={BANYA_MAX_EXTRA_HOURS}
            disabled={!banyaTime}
            onChange={setBanyaExtraHour}
          />
          <AgePriceCounter
            title="Доп. гость"
            price={BANYA_EXTRA_GUEST_PRICE}
            rateLabel={`+${BANYA_EXTRA_GUEST_PRICE.toLocaleString('ru-RU')} ₽ сверх 4 человек`}
            value={banyaExtraGuest}
            max={BANYA_MAX_EXTRA_GUESTS}
            disabled={!banyaTime}
            onChange={setBanyaExtraGuest}
          />
        </div>
      )}

      {service.configType === 'spa' && spaTime && (
        <div>
          <div className="tl-inline-label mb-2">Специалист</div>
          <div className="tl-inline-specialists">
            {SPECIALISTS
              .filter((specialist) => specialist === ANY_SPECIALIST || getSpaAvailableSpecialists(spaDate, spaTime).includes(specialist))
              .map((specialist) => {
                const isAny = specialist === ANY_SPECIALIST;

                return (
                  <button
                    key={specialist}
                    type="button"
                    onClick={() => setSpaSpecialist(specialist)}
                    className={cn('tl-inline-specialist', spaSpecialist === specialist ? 'tl-inline-specialist-active' : '')}
                  >
                    <span className="tl-inline-specialist-content">
                      <span className="tl-inline-specialist-name">{isAny ? 'Любой специалист' : specialist}</span>
                      <span className="tl-inline-specialist-role">{isAny ? 'Автовыбор доступного' : 'Мастер спа-процедур'}</span>
                    </span>
                    {spaSpecialist === specialist && (
                      <span className="tl-inline-specialist-check" aria-hidden="true">
                        <Check size={14} />
                      </span>
                    )}
                  </button>
                );
              })}
          </div>
        </div>
      )}

      {service.configType === 'pool' && (
        <>
          <div className="tl-inline-field-label">Дата посещения</div>
          <div className="tl-inline-calendar-head">
            <span>Апрель 2026</span>
            <div className="tl-inline-calendar-nav">
              <button type="button" aria-label="Предыдущий месяц" title="Предыдущий месяц">
                <ChevronLeft size={18} />
              </button>
              <button type="button" aria-label="Следующий месяц" title="Следующий месяц">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
          <InlineDateStrip
            dates={CALENDAR_STRIP_DATES}
            value={poolDate}
            disabledDates={disabledDates}
            onChange={setPoolDate}
          />
          <div className="tl-age-price-list">
            <div className="tl-age-price-heading">Количество</div>
            <AgePriceCounter
              title="Взрослый"
              price={POOL_ADULT_PRICE}
              unit="за билет"
              value={poolAdultCount}
              max={MAX_ADULTS}
              onChange={setPoolAdultCount}
            />
            <AgePriceCounter
              title="Ребенок (0-17 лет)"
              price={POOL_CHILD_PRICE}
              unit="за билет"
              value={poolChildCount}
              max={MAX_CHILDREN}
              onChange={setPoolChildCount}
            />
          </div>
        </>
      )}

      {!isLiveAgePrice && (
      <div className="tl-inline-footer">
        <div className="tl-service-footer-meta">
          {priceDetails}
          {isScheduled && selectedTime && <div className="tl-service-added-date">{selectedDate} • {selectedTime}</div>}
        </div>
        <div className="tl-service-price-action">
          <div className="tl-price" style={{ fontSize: '20px', lineHeight: '26px', fontWeight: 'var(--font-weight-normal)' }}>
            {finalPrice.toLocaleString('ru-RU')} ₽
          </div>
          {canSave && (
            <button
              type="button"
              onClick={handleSave}
              className="tl-primary-button min-w-[128px] transition-all"
            >
              Добавить
            </button>
          )}
        </div>
      </div>
      )}
    </div>
  );
}

// --- CONFIGURATION MODAL COMPONENT ---

function ConfigModal({ service, onClose, onSave, onRemove }: any) {
  const existingConfig = service.existingConfig;
  const isEditing = service.isEditing;
  const existingItems = service.existingItems || [];

  // State for tracking which existing item is being edited
  const [editingExistingId, setEditingExistingId] = useState<number | null>(null);

  const DAYS = 6;

  const [adultCount, setAdultCount] = useState<number>(
    existingConfig?.adultCount ?? MAX_ADULTS
  );
  const [childCount, setChildCount] = useState<number>(
    existingConfig?.childCount ?? MAX_CHILDREN
  );

  // Banya follows the v4 slot model: one booking = one date/time with configurable extras.
  const [banyaExtraGuest, setBanyaExtraGuest] = useState<number>(existingConfig?.extraGuest || 0);
  const [banyaExtraHour, setBanyaExtraHour] = useState<number>(existingConfig?.extraHour || 0);
  const [banyaDate, setBanyaDate] = useState<string>(existingConfig?.date || DATES[0]);
  const [banyaTime, setBanyaTime] = useState<string>(existingConfig?.time || '10:00');
  const [banyaSpecialist, setBanyaSpecialist] = useState<string>(existingConfig?.specialist || SPECIALISTS[0]);

  // Spa state
  const [spaDate, setSpaDate] = useState<string>(existingConfig?.date || DATES[0]);
  const [spaTime, setSpaTime] = useState<string>(existingConfig?.time || '10:00');
  const [spaSpecialist, setSpaSpecialist] = useState<string>(existingConfig?.specialist || SPECIALISTS[0]);

  // Pool state
  const [poolAdultCount, setPoolAdultCount] = useState<number>(
    existingConfig?.guestPools?.filter((gp: any) => gp.type === 'adult').reduce((sum: number, gp: any) => sum + gp.count, 0) || 2
  );
  const [poolChildCount, setPoolChildCount] = useState<number>(
    existingConfig?.guestPools?.filter((gp: any) => gp.type === 'child').reduce((sum: number, gp: any) => sum + gp.count, 0) || 1
  );
  const [poolDate, setPoolDate] = useState<string>(existingConfig?.date || DATES[0]);

  // Handler to load existing item for editing
  const handleEditExisting = (item: any) => {
    setEditingExistingId(item.cartItemId);

    if (service.configType === 'banya') {
      setBanyaExtraGuest(item.extraGuest || 0);
      setBanyaExtraHour(item.extraHour || 0);
      setBanyaDate(item.date || DATES[0]);
      setBanyaTime(item.time || '10:00');
      setBanyaSpecialist(item.specialist || SPECIALISTS[0]);
    } else if (service.configType === 'spa') {
      setSpaDate(item.date || DATES[0]);
      setSpaTime(item.time || '10:00');
      setSpaSpecialist(item.specialist || SPECIALISTS[0]);
    } else if (service.configType === 'pool') {
      const adultTotal = item.guestPools?.filter((gp: any) => gp.type === 'adult').reduce((sum: number, gp: any) => sum + gp.count, 0) || 0;
      const childTotal = item.guestPools?.filter((gp: any) => gp.type === 'child').reduce((sum: number, gp: any) => sum + gp.count, 0) || 0;
      setPoolAdultCount(adultTotal);
      setPoolChildCount(childTotal);
      setPoolDate(item.date || DATES[0]);
    }
  };

  // Handler to clear editing mode
  const handleCancelEdit = () => {
    setEditingExistingId(null);
    // Reset to defaults
    if (service.configType === 'banya') {
      setBanyaExtraGuest(0);
      setBanyaExtraHour(0);
      setBanyaDate(DATES[0]);
      setBanyaTime('10:00');
      setBanyaSpecialist(SPECIALISTS[0]);
    } else if (service.configType === 'spa') {
      setSpaDate(DATES[0]);
      setSpaTime('10:00');
      setSpaSpecialist(SPECIALISTS[0]);
    } else if (service.configType === 'pool') {
      setPoolAdultCount(0);
      setPoolChildCount(0);
      setPoolDate(DATES[0]);
    }
  };

  let finalPrice = service.basePrice;
  let priceDetails = '';

  if (service.configType === 'per_guest') {
    finalPrice = (adultCount * BREAKFAST_ADULT_PRICE + childCount * BREAKFAST_CHILD_PRICE) * DAYS;
    priceDetails = `${formatGuests(adultCount + childCount)} • ${DAYS} дней`;
  } else if (service.configType === 'banya') {
    const totalGuests = getBanyaGuests(banyaExtraGuest);
    const totalHours = getBanyaHours(banyaExtraHour);
    finalPrice = getBanyaPrice(banyaExtraGuest, banyaExtraHour);
    priceDetails = `${formatGuests(totalGuests)} • ${totalHours} часа`;
  } else if (service.configType === 'spa') {
    finalPrice = SPA_PRICE;
    const specialistText = spaSpecialist === 'Любой' ? 'Любой специалист' : spaSpecialist;
    priceDetails = `1 процедура • ${specialistText}`;
  } else if (service.configType === 'pool') {
    finalPrice = (poolAdultCount * POOL_ADULT_PRICE) + (poolChildCount * POOL_CHILD_PRICE);
    priceDetails = `${poolAdultCount + poolChildCount} билетов • ${poolDate}`;
  }

  const handleSave = () => {
    if (service.configType === 'per_guest') {
      const guestBreakfasts = [
        ...GUESTS.filter(g => g.type === 'adult').map((g, idx) => ({
          guestId: g.id,
          type: 'adult',
          count: idx < adultCount ? DAYS : 0,
          pricePerDay: BREAKFAST_ADULT_PRICE
        })),
        ...GUESTS.filter(g => g.type === 'child').map((g, idx) => ({
          guestId: g.id,
          type: 'child',
          count: idx < childCount ? DAYS : 0,
          pricePerDay: BREAKFAST_CHILD_PRICE
        }))
      ];
      onSave({ ...service, finalPrice, guestBreakfasts, adultCount, childCount, priceLabel: priceDetails });
    } else if (service.configType === 'banya') {
      onSave({
        ...service,
        finalPrice,
        extraGuest: banyaExtraGuest,
        extraHour: banyaExtraHour,
        date: banyaDate,
        time: banyaTime,
        specialist: banyaSpecialist,
        guests: getBanyaGuests(banyaExtraGuest),
        hours: getBanyaHours(banyaExtraHour),
        priceLabel: priceDetails,
        isEditing: false,
        cartItemId: editingExistingId || existingConfig?.cartItemId
      });
      setEditingExistingId(null); // Clear editing mode after save
    } else if (service.configType === 'spa') {
      onSave({
        ...service,
        finalPrice,
        date: spaDate,
        time: spaTime,
        specialist: spaSpecialist,
        isEditing: editingExistingId !== null || isEditing,
        cartItemId: editingExistingId || existingConfig?.cartItemId
      });
      setEditingExistingId(null); // Clear editing mode after save
    } else if (service.configType === 'pool') {
      const adultGuests = GUESTS.filter(g => g.type === 'adult');
      const childGuests = GUESTS.filter(g => g.type === 'child');
      const guestPools = [
        ...distributeTicketsByGuest(adultGuests, poolAdultCount, POOL_ADULT_PRICE),
        ...distributeTicketsByGuest(childGuests, poolChildCount, POOL_CHILD_PRICE)
      ];
      onSave({
        ...service,
        finalPrice,
        guestPools,
        priceLabel: priceDetails,
        date: poolDate,
        isEditing: editingExistingId !== null || isEditing,
        cartItemId: editingExistingId || existingConfig?.cartItemId
      });
      setEditingExistingId(null); // Clear editing mode after save
    }
  };

  const handleDelete = () => {
    if (existingConfig?.cartItemId) {
      // Call parent's remove function
      onClose();
    }
  };

  // Available time slots based on selected date (simulating realistic availability)
  const getBanyaAvailableTimeSlots = (date: string) => {
    const dateIndex = DATES.indexOf(date);
    let baseSlots = TIME_SLOTS;
    // Different availability for each date
    switch (dateIndex) {
      case 0: // 16 апреля - много свободных слотов
        baseSlots = TIME_SLOTS.filter((_, idx) => idx !== 2); // все кроме одного
        break;
      case 1: // 17 апреля - средняя занятость
        baseSlots = ['10:00', '14:00', '18:00'];
        break;
      case 2: // 18 апреля - полностью занят (disabled в UI)
        baseSlots = [];
        break;
      case 3: // 19 апреля - много свободных
        baseSlots = TIME_SLOTS.filter((_, idx) => idx !== 4);
        break;
      case 4: // 20 апреля - полностью занят (disabled в UI)
        baseSlots = [];
        break;
      case 5: // 21 апреля - мало свободных
        baseSlots = ['12:00', '20:00'];
        break;
      default:
        baseSlots = TIME_SLOTS;
    }
    const bookedSlots = new Set(
      existingItems
        .filter((item: any) => item.cartItemId !== editingExistingId)
        .filter((item: any) => item.date === date)
        .map((item: any) => item.time)
    );
    return baseSlots.filter(time => !bookedSlots.has(time));
  };

  const getSpaAvailableTimeSlots = (date: string) => {
    return TIME_SLOTS.filter((time) => getSpaAvailableSpecialists(date, time).length > 0);
  };

  const getSpaAvailableSpecialists = (date: string, time: string) => {
    const bookedSpecificSpecialists = new Set(
      existingItems
        .filter((item: any) => item.cartItemId !== editingExistingId)
        .filter((item: any) => item.date === date && item.time === time && item.specialist !== ANY_SPECIALIST)
        .map((item: any) => item.specialist)
    );
    const anonymousBookings = existingItems
      .filter((item: any) => item.cartItemId !== editingExistingId)
      .filter((item: any) => item.date === date && item.time === time && item.specialist === ANY_SPECIALIST)
      .length;
    const availableSpecialists = SPA_SPECIALISTS.filter(
      (specialist) => getSpaBaseTimeSlotsForSpecialist(date, specialist).includes(time) && !bookedSpecificSpecialists.has(specialist)
    );

    return availableSpecialists.slice(anonymousBookings);
  };

  const availableTimeSlots = service.configType === 'banya'
    ? getBanyaAvailableTimeSlots(banyaDate)
    : service.configType === 'spa'
      ? getSpaAvailableTimeSlots(spaDate)
      : TIME_SLOTS;
  const canSave =
    service.configType === 'banya' || service.configType === 'spa'
      ? availableTimeSlots.length > 0
      : service.configType === 'pool'
        ? poolAdultCount + poolChildCount > 0
        : true;

  // Auto-select first available time slot when the chosen date changes.
  useEffect(() => {
    if (service.configType === 'banya') {
      const slots = getBanyaAvailableTimeSlots(banyaDate);
      if (slots.length > 0 && !slots.includes(banyaTime)) {
        setBanyaTime(slots[0]);
      }
    } else if (service.configType === 'spa') {
      const slots = getSpaAvailableTimeSlots(spaDate);
      if (slots.length > 0 && !slots.includes(spaTime)) {
        setSpaTime(slots[0]);
      }
    }
  }, [banyaDate, spaDate, service.configType]);

  useEffect(() => {
    if (
      service.configType === 'spa' &&
      spaTime &&
      spaSpecialist !== ANY_SPECIALIST &&
      !getSpaAvailableSpecialists(spaDate, spaTime).includes(spaSpecialist)
    ) {
      setSpaSpecialist(ANY_SPECIALIST);
    }
  }, [spaDate, spaTime, spaSpecialist, service.configType]);

  return (
    <div className="fixed inset-0 bg-slate-900/40 z-50 flex items-center justify-center p-0 min-[580px]:p-4">
      <div className="tl-modal-surface rounded-none min-[580px]:rounded-[var(--radius-card)] w-full max-w-[1080px] h-full min-[580px]:h-auto min-[580px]:max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200 relative flex flex-col" style={{ boxShadow: 'var(--elevation-sm)' }}>

        {/* Close button */}
        <button
          onClick={onClose}
          className="tl-secondary-button absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center transition-colors"
        >
          <X size={20} className="text-primary" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-grow">
          {/* Hero Image */}
          {service.configType === 'per_guest' ? (
            <div className="h-[180px] sm:h-[220px] min-[860px]:h-[260px] overflow-hidden relative flex">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="h-[180px] sm:h-[220px] min-[860px]:h-[260px] overflow-hidden relative">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            </div>
          )}

          {/* Content */}
          <div className="p-4 sm:p-6 grid grid-cols-1 min-[860px]:grid-cols-2 gap-5 min-[860px]:gap-8">
            {/* Left Column - Description */}
            <div className="min-w-0 overflow-hidden">
	              <h2 className="tl-title mb-3" style={{ fontSize: '20px', lineHeight: '28px', fontWeight: 'var(--font-weight-normal)' }}>
                {service.title}
              </h2>

              <div className="flex flex-wrap gap-3 min-[860px]:gap-4 mb-4">
                {service.features.map((f: any, i: number) => (
                  <div key={i} className="flex items-center gap-2 text-muted-foreground">
                    {f.icon}
                    <span style={{ fontSize: '14px', lineHeight: '20px' }}>{f.text}</span>
                  </div>
                ))}
              </div>

              {service.configType === 'per_guest' && (
                <div className="tl-copy text-foreground space-y-3" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 'var(--font-weight-normal)' }}>
                  <p>Насладитесь нашим диетическим завтраком, который не только вкусный, но и полезный! Он наполнен свежими фруктами, нежным йогуртом и хрустящими орехами, что делает его идеальным началом вашего дня. Попробуйте и почувствуйте, как энергия наполняет вас!</p>
                  <p>На выбор гостя предоставляется:</p>
                  <p>- Овсяная каша с лесными ягодами или нежные сырники со сгущенным молоком</p>
                  <p>- Ароматный какао на кокосовом молоке</p>
                  <p>- Амлет с яйцом и сырной сосиской</p>
                  <p>- Хрустящие гренки с сыром Филадельфия</p>
                  <p>На выбор гостя предоставляется:</p>
                  <p>- Свежевыжатый сок из цитрусовых.</p>
                  <p>Завтрак подается с 7:00 до 11:00 в основном ресторане отеля.</p>
                </div>
              )}

              {service.configType === 'banya' && (
                <div className="tl-copy text-foreground space-y-3" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 'var(--font-weight-normal)' }}>
                  <p>В банном комплексе вас ждут баня-бочка, купель, обливные вёдра и открытый бассейн, уютная зона отдыха. Каждая процедура создаёт атмосферу полного расслабления, помогает восстановить силы и подарит ощущение настоящего SPA-ритуала.</p>
                  <p>Режим работы с 10:00 до 22:00. Между сеансами предусмотрен технический перерыв 30 минут для уборки.</p>
                </div>
              )}

              {service.configType === 'spa' && (
                <div className="tl-copy text-foreground space-y-3" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 'var(--font-weight-normal)' }}>
                  <p>Турецкий пенный массаж по традиции проводится в хамаме. После прогревания и распаривания кожи с нанесенным на неё «Черным мылом», ритуал продолжается пилингом рукавицей Кесса, во время которого происходит интенсивное очищение кожи. Далее следует пенный массаж, доставляющий невероятное наслаждение, чувство легкости и блаженства. Финальный аккорд – нанесение увлажняющего молочка, которое подарит Вашей коже гладкость. </p>
                  <p> • Распаривание в хамам </p>
                  <p> • Глубокое очищение кожи чёрным мылом</p>
                  <p> • Пилинг тела рукавичкой Kessa</p>
                  <p> • Пенный массаж</p>
                  <p> • Увлажнение тела молочком</p>
                </div>
              )}

              {service.configType === 'pool' && (
                <div className="tl-copy text-foreground space-y-3" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 'var(--font-weight-normal)' }}>
                  <p>Окунитесь в открытые и крытые бассейны с подогреваемой морской водой при температуре +28 °C круглый год. Морская вода обогащает организм кислородом, очищает кожу и дарит ощущение легкости и свежести. Бассейны подходят как для расслабленного отдыха, так и для водных игр и тренировок.</p>
                  <p> Детский бассейн: глубина 0,7 м, диаметр 9 м — безопасное пространство для маленьких гостей.</p>
                  <p> Открытый бассейн: глубина 1,35 м, диаметр 20 м — для неспешного плавания и игр на свежем воздухе.</p>
                  <p> Бассейн площадью 80,4 м²: длина 13,4 м, ширина 6 м, глубина 1,3 м, с дополнительной малой чашей 3×6 м — сочетание зоны для плавания и комфортного отдыха в воде.</p>
                  <p>Режим работы с 10:00 до 19:00. Техн перерыв с 12:00 до 13:00. В стоимость входит полотенце и шкафчик для вещей.</p>
                </div>
              )}


            </div>

            {/* Right Column - Configuration */}
            <div className="min-w-0 space-y-6">
              {/* Existing items block (for multi-add services like banya, spa, and pool) */}
              {(service.configType === 'banya' || service.configType === 'spa' || service.configType === 'pool') && existingItems.length > 0 && (
                <div className="space-y-3">
                  {existingItems.filter((item: any) => item.cartItemId !== editingExistingId).map((item: any) => {
                    return (
                      <div
                        key={item.cartItemId}
	                        className="rounded-[var(--radius-card)] border p-4 tl-soft-panel border-border"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <div className="text-foreground mb-1" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 'var(--font-weight-medium)' }}>
                              {item.title}
                            </div>
                            <div className="text-muted-foreground" style={{ fontSize: '12px', lineHeight: '16px' }}>
                              {service.configType === 'banya' && `${item.date}, ${item.time}, ${item.specialist === 'Любой' ? 'любой специалист' : item.specialist}`}
                              {service.configType === 'spa' && `${item.date}, ${item.time}, ${item.specialist === 'Любой' ? 'Любой специалист' : item.specialist}`}
                              {service.configType === 'pool' && item.priceLabel}
                            </div>
                            {service.configType === 'banya' && (
                              <div className="text-muted-foreground mt-1" style={{ fontSize: '12px', lineHeight: '16px' }}>
                                {formatGuests(item.guests || getBanyaGuests(item.extraGuest || 0))} • {item.hours || getBanyaHours(item.extraHour || 0)} часа
                              </div>
                            )}
                          </div>
                          <div className="text-foreground" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 'var(--font-weight-normal)' }}>
                            {item.finalPrice.toLocaleString('ru-RU')} ₽
                          </div>
                        </div>
                        {(service.configType === 'banya' || service.configType === 'spa') && (
                          <div className="text-muted-foreground mb-3" style={{ fontSize: '12px', lineHeight: '16px' }}>
                            Чтобы изменить дату или параметры, удалите запись и добавьте новую.
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              onRemove(item.cartItemId);
                              if (existingItems.length === 1) {
                                onClose();
                              }
                            }}
                            className="flex-1 px-3 py-2 bg-card hover:bg-white text-destructive rounded-[var(--radius-button)] transition-colors border border-border"
                            style={{ fontSize: '14px', lineHeight: '20px' }}
                          >
                            Удалить
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Regular configuration */}
              <div className={cn(
                "space-y-6",
	                editingExistingId !== null && (service.configType === 'banya' || service.configType === 'spa' || service.configType === 'pool') ? "bg-[#e8f2ff] border border-primary rounded-[var(--radius-card)] p-4" : ""
              )}>
                {editingExistingId !== null && (service.configType === 'banya' || service.configType === 'spa' || service.configType === 'pool') && (() => {
                  const editingItem = existingItems.find((item: any) => item.cartItemId === editingExistingId);
                  if (!editingItem) return null;

                  return (
                    <>
                      {/* Summary блок редактируемой услуги */}
                      <div className="pb-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <div className="text-foreground mb-1" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 'var(--font-weight-medium)' }}>
                              {editingItem.title}
                            </div>
                            <div className="text-muted-foreground" style={{ fontSize: '12px', lineHeight: '16px' }}>
                              {service.configType === 'banya' && `${editingItem.date}, ${editingItem.time}, ${editingItem.specialist === 'Любой' ? 'любой специалист' : editingItem.specialist}`}
                              {service.configType === 'spa' && `${editingItem.date}, ${editingItem.time}, ${editingItem.specialist === 'Любой' ? 'Любой специалист' : editingItem.specialist}`}
                              {service.configType === 'pool' && editingItem.priceLabel}
                            </div>
                            {service.configType === 'banya' && (
                              <div className="text-muted-foreground mt-1" style={{ fontSize: '12px', lineHeight: '16px' }}>
                                {formatGuests(editingItem.guests || getBanyaGuests(editingItem.extraGuest || 0))} • {editingItem.hours || getBanyaHours(editingItem.extraHour || 0)} часа
                              </div>
                            )}
                          </div>
                          <div className="text-foreground" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 'var(--font-weight-normal)' }}>
                            {editingItem.finalPrice.toLocaleString('ru-RU')} ₽
                          </div>
                        </div>
                      </div>

                      {/* Разделитель */}
                      <div className="border-t border-primary/20 -mx-4 mb-4"></div>

                      {/* Заголовок редактирования */}
                      <div className="flex items-center justify-between mb-4 -mt-2">
                        <span className="text-primary" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 'var(--font-weight-medium)' }}>
                          Редактирование услуги
                        </span>
                        <button
                          onClick={handleCancelEdit}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    </>
                  );
                })()}

                {service.configType === 'per_guest' && (
                  <>
                    <div>
                      <h3 className="text-foreground mb-3" style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'var(--font-weight-normal)' }}>Выберите гостей</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-foreground min-w-0" style={{ fontSize: '14px', lineHeight: '20px' }}>Взрослые</span>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => setAdultCount(Math.max(0, adultCount - 1))}
                              disabled={adultCount === 0}
                              className="w-9 h-9 rounded-[var(--radius-button)] bg-[#d9e9ff] hover:bg-[#c5deff] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                            >
                              <span className="text-primary" style={{ fontSize: '20px', lineHeight: '1' }}>−</span>
                            </button>
                            <span className="text-foreground w-8 text-center" style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'var(--font-weight-medium)' }}>
                              {adultCount}
                            </span>
                            <button
                              onClick={() => setAdultCount(Math.min(MAX_ADULTS, adultCount + 1))}
                              disabled={adultCount === MAX_ADULTS}
                              className="w-9 h-9 rounded-[var(--radius-button)] bg-[#d9e9ff] hover:bg-[#c5deff] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                            >
                              <span className="text-primary" style={{ fontSize: '20px', lineHeight: '1' }}>+</span>
                            </button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-foreground min-w-0" style={{ fontSize: '14px', lineHeight: '20px' }}>Дети</span>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => setChildCount(Math.max(0, childCount - 1))}
                              disabled={childCount === 0}
                              className="w-9 h-9 rounded-[var(--radius-button)] bg-[#d9e9ff] hover:bg-[#c5deff] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                            >
                              <span className="text-primary" style={{ fontSize: '20px', lineHeight: '1' }}>−</span>
                            </button>
                            <span className="text-foreground w-8 text-center" style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'var(--font-weight-medium)' }}>
                              {childCount}
                            </span>
                            <button
                              onClick={() => setChildCount(Math.min(MAX_CHILDREN, childCount + 1))}
                              disabled={childCount === MAX_CHILDREN}
                              className="w-9 h-9 rounded-[var(--radius-button)] bg-[#d9e9ff] hover:bg-[#c5deff] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                            >
                              <span className="text-primary" style={{ fontSize: '20px', lineHeight: '1' }}>+</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {service.configType === 'banya' && (
                  <>
                    {/* Date Selection - Horizontal Scrollable */}
                    <div>
                      <h3 className="text-foreground mb-2" style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'var(--font-weight-normal)' }}>
                        Апрель 2026
                      </h3>
                      <div className="flex gap-2 overflow-x-auto pb-2">
                        {DATES.map((date, idx) => {
                          const isDisabled = getBanyaAvailableTimeSlots(date).length === 0;
                          const [day] = date.split(' ');
                          const fullDate = `2026-04-${16 + idx}`;
                          const dateObj = new Date(fullDate);
                          const dayOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'][dateObj.getDay()];

                          return (
                            <button
                              key={date}
                              onClick={() => !isDisabled && setBanyaDate(date)}
                              disabled={isDisabled}
                              className={cn(
                                "w-[64px] py-3 rounded-[var(--radius-button)] transition-colors flex-shrink-0",
                                banyaDate === date
                                  ? "bg-primary text-primary-foreground"
                                  : isDisabled
                                    ? "bg-muted text-muted-foreground cursor-not-allowed opacity-40"
	                                  : "tl-input-button text-foreground hover:bg-secondary"
                              )}
                            >
                              <div className="text-center">
                                <div style={{ fontSize: '12px', lineHeight: '16px', opacity: 0.8 }}>
                                  {dayOfWeek}
                                </div>
                                <div style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'var(--font-weight-medium)' }}>
                                  {day}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Time Selection - Chips Grid */}
                    <div>
                      <div className="flex items-baseline justify-between gap-3 mb-3">
                        <h3 className="text-foreground" style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'var(--font-weight-normal)' }}>
                          Выберите время начала
                        </h3>
                        <span className="text-muted-foreground" style={{ fontSize: '12px', lineHeight: '16px' }}>
                          {availableTimeSlots.length > 0
                            ? `${availableTimeSlots.length} ${availableTimeSlots.length === 1 ? 'слот' : availableTimeSlots.length < 5 ? 'слота' : 'слотов'} доступно`
                            : 'Нет свободных слотов'}
                        </span>
                      </div>
                      {availableTimeSlots.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {availableTimeSlots.map((time) => (
                            <button
                              key={time}
                              onClick={() => setBanyaTime(time)}
                              className={cn(
                                "px-3 py-3 rounded-full border transition-colors min-h-[44px]",
                                banyaTime === time
                                  ? "bg-primary text-primary-foreground border-primary"
	                                  : "tl-input-button text-foreground hover:bg-secondary border-primary/20"
                              )}
                              style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 'var(--font-weight-medium)' }}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="bg-muted border border-border rounded-[var(--radius-card)] p-4 text-center">
                          <p className="text-muted-foreground" style={{ fontSize: '14px', lineHeight: '20px' }}>
                            К сожалению, на выбранную дату все слоты заняты. Пожалуйста, выберите другую дату.
                          </p>
                        </div>
                      )}
                    </div>

                    <div>
                      <h3 className="text-foreground mb-3" style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'var(--font-weight-normal)' }}>
                        Выберите специалиста
                      </h3>
                      <div className="space-y-3">
                        {SPECIALISTS.map((specialist) => {
                          const isAny = specialist === 'Любой';

                          return (
                            <button
                              key={specialist}
                              onClick={() => setBanyaSpecialist(specialist)}
                              className={cn(
                                "w-full px-4 py-3 rounded-[var(--radius-button)] transition-all text-left flex items-center gap-3 border",
                                banyaSpecialist === specialist
                                  ? "bg-primary/10 border-primary"
                                  : "bg-card border-border hover:bg-secondary"
                              )}
                            >
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                {isAny ? (
                                  <Users size={20} className="text-primary" />
                                ) : (
                                  <span className="text-primary" style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'var(--font-weight-medium)' }}>
                                    {specialist.split(' ').map(n => n[0]).join('')}
                                  </span>
                                )}
                              </div>
                              <div className="flex-1">
                                <div className="text-foreground" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 'var(--font-weight-medium)' }}>
                                  {specialist}
                                </div>
                                <div className="text-muted-foreground" style={{ fontSize: '12px', lineHeight: '16px' }}>
                                  {isAny ? 'Любой свободный специалист' : 'Специалист банного комплекса'}
                                </div>
                              </div>
                              {banyaSpecialist === specialist && (
                                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                  <Check size={14} className="text-primary-foreground" />
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Extra Parameters */}
                    <div>
                      <h3 className="text-foreground mb-3" style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'var(--font-weight-normal)' }}>
                        Дополнительные параметры
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-3 max-[420px]:items-start">
                          <div className="min-w-0">
                            <span className="text-foreground block" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 'var(--font-weight-medium)' }}>
                              Доп. час
                            </span>
                            <span className="text-muted-foreground block" style={{ fontSize: '12px', lineHeight: '16px' }}>
                              +{BANYA_EXTRA_HOUR_PRICE.toLocaleString('ru-RU')} ₽ за 1 час
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => setBanyaExtraHour(Math.max(0, banyaExtraHour - 1))}
                              disabled={banyaExtraHour === 0}
                              className="w-9 h-9 rounded-[var(--radius-button)] bg-[#d9e9ff] hover:bg-[#c5deff] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                            >
                              <span className="text-primary" style={{ fontSize: '20px', lineHeight: '1' }}>−</span>
                            </button>
                            <span className="text-foreground w-8 text-center" style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'var(--font-weight-medium)' }}>
                              {banyaExtraHour}
                            </span>
                            <button
                              onClick={() => setBanyaExtraHour(Math.min(BANYA_MAX_EXTRA_HOURS, banyaExtraHour + 1))}
                              disabled={banyaExtraHour === BANYA_MAX_EXTRA_HOURS}
                              className="w-9 h-9 rounded-[var(--radius-button)] bg-[#d9e9ff] hover:bg-[#c5deff] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                            >
                              <span className="text-primary" style={{ fontSize: '20px', lineHeight: '1' }}>+</span>
                            </button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between gap-3 max-[420px]:items-start">
                          <div className="min-w-0">
                            <span className="text-foreground block" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 'var(--font-weight-medium)' }}>
                              Доп. гость
                            </span>
                            <span className="text-muted-foreground block" style={{ fontSize: '12px', lineHeight: '16px' }}>
                              +{BANYA_EXTRA_GUEST_PRICE.toLocaleString('ru-RU')} ₽ сверх 4 человек
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => setBanyaExtraGuest(Math.max(0, banyaExtraGuest - 1))}
                              disabled={banyaExtraGuest === 0}
                              className="w-9 h-9 rounded-[var(--radius-button)] bg-[#d9e9ff] hover:bg-[#c5deff] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                            >
                              <span className="text-primary" style={{ fontSize: '20px', lineHeight: '1' }}>−</span>
                            </button>
                            <span className="text-foreground w-8 text-center" style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'var(--font-weight-medium)' }}>
                              {banyaExtraGuest}
                            </span>
                            <button
                              onClick={() => setBanyaExtraGuest(Math.min(BANYA_MAX_EXTRA_GUESTS, banyaExtraGuest + 1))}
                              disabled={banyaExtraGuest === BANYA_MAX_EXTRA_GUESTS}
                              className="w-9 h-9 rounded-[var(--radius-button)] bg-[#d9e9ff] hover:bg-[#c5deff] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                            >
                              <span className="text-primary" style={{ fontSize: '20px', lineHeight: '1' }}>+</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {service.configType === 'spa' && (
                  <>
                    {/* Date Selection - Horizontal Scrollable */}
                    <div>
                      <h3 className="text-foreground mb-2" style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'var(--font-weight-normal)' }}>
                        Апрель 2026
                      </h3>
                      <div className="flex gap-2 overflow-x-auto pb-2">
                        {DATES.map((date, idx) => {
                          // Simulate some dates being unavailable
                          const isDisabled = idx === 1 || idx === 5;
                          const [day] = date.split(' ');
                          const fullDate = `2026-04-${16 + idx}`;
                          const dateObj = new Date(fullDate);
                          const dayOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'][dateObj.getDay()];

                          return (
                            <button
                              key={date}
                              onClick={() => !isDisabled && setSpaDate(date)}
                              disabled={isDisabled}
                              className={cn(
                                "w-[64px] py-3 rounded-[var(--radius-button)] transition-colors flex-shrink-0",
                                spaDate === date
                                  ? "bg-primary text-primary-foreground"
                                  : isDisabled
                                    ? "bg-muted text-muted-foreground cursor-not-allowed opacity-40"
	                                  : "tl-input-button text-foreground hover:bg-secondary"
                              )}
                            >
                              <div className="text-center">
                                <div style={{ fontSize: '12px', lineHeight: '16px', opacity: 0.8 }}>
                                  {dayOfWeek}
                                </div>
                                <div style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'var(--font-weight-medium)' }}>
                                  {day}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Time Selection - Chips Grid */}
                    <div>
                      <div className="flex items-baseline justify-between mb-3">
                        <h3 className="text-foreground" style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'var(--font-weight-normal)' }}>
                          Время начала
                        </h3>

                      </div>
                      {availableTimeSlots.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {availableTimeSlots.map((time) => (
                            <button
                              key={time}
                              onClick={() => setSpaTime(time)}
                              className={cn(
                                "px-3 py-3 rounded-full border transition-colors min-h-[44px]",
                                spaTime === time
                                  ? "bg-primary text-primary-foreground border-primary"
	                                  : "tl-input-button text-foreground hover:bg-secondary border-primary/20"
                              )}
                              style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 'var(--font-weight-medium)' }}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="bg-muted border border-border rounded-[var(--radius-card)] p-4 text-center">
                          <p className="text-muted-foreground" style={{ fontSize: '14px', lineHeight: '20px' }}>
                            К сожалению, на выбранную дату все слоты заняты. Пожалуйста, выберите другую дату.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Specialist Selection - Cards with Photos */}
                    <div>
                      <h3 className="text-foreground mb-3" style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'var(--font-weight-normal)' }}>
                        Выберите специалиста
                      </h3>
                      <div className="space-y-3">
                        {SPECIALISTS
                          .filter((specialist) => specialist === ANY_SPECIALIST || getSpaAvailableSpecialists(spaDate, spaTime).includes(specialist))
                          .map((specialist, idx) => {
                          const isAny = specialist === ANY_SPECIALIST;

                          return (
                            <button
                              key={specialist}
                              onClick={() => setSpaSpecialist(specialist)}
                              className={cn(
                                "w-full px-4 py-3 rounded-[var(--radius-button)] transition-all text-left flex items-center gap-3 border",
                                spaSpecialist === specialist
                                  ? "bg-primary/10 border-primary"
                                  : "bg-card border-border hover:bg-secondary"
                              )}
                            >
                              {isAny ? (
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center flex-shrink-0">
                                  <Users size={20} className="text-primary" />
                                </div>
                              ) : (
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center flex-shrink-0">
                                  <span className="text-primary" style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'var(--font-weight-medium)' }}>
                                    {specialist.split(' ').map(n => n[0]).join('')}
                                  </span>
                                </div>
                              )}
                              <div className="flex-1">
                                <div className="text-foreground" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 'var(--font-weight-medium)' }}>
                                  {specialist}
                                </div>
                                <div className="text-muted-foreground" style={{ fontSize: '12px', lineHeight: '16px' }}>
                                  {isAny
                                    ? 'Все специалисты'
                                    : 'Мастер спа-процедур'
                                  }
                                </div>
                              </div>
                              {spaSpecialist === specialist && (
                                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                  <Check size={14} className="text-primary-foreground" />
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </>
                )}

                {service.configType === 'pool' && (
                  <>
                    {/* Date Selection - Horizontal Scrollable */}
                    <div>
                      <h3 className="text-foreground mb-2" style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'var(--font-weight-normal)' }}>
                        Апрель 2026
                      </h3>
                      <div className="flex gap-2 overflow-x-auto pb-2">
                        {DATES.map((date, idx) => {
                          const [day] = date.split(' ');
                          const fullDate = `2026-04-${16 + idx}`;
                          const dateObj = new Date(fullDate);
                          const dayOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'][dateObj.getDay()];

                          // Check if this date is already booked (except for the item being edited)
                          const bookedDates = existingItems
                            .filter((item: any) => item.cartItemId !== editingExistingId)
                            .map((item: any) => item.date);
                          const isDateBooked = bookedDates.includes(date);

                          return (
                            <button
                              key={date}
                              onClick={() => !isDateBooked && setPoolDate(date)}
                              disabled={isDateBooked}
                              className={cn(
                                "w-[64px] py-3 rounded-[var(--radius-button)] transition-colors flex-shrink-0",
                                isDateBooked
                                  ? "bg-muted text-muted-foreground cursor-not-allowed opacity-50"
                                  : poolDate === date
                                    ? "bg-primary text-primary-foreground"
	                                    : "tl-input-button text-foreground hover:bg-secondary"
                              )}
                            >
                              <div className="text-center">
                                <div style={{ fontSize: '12px', lineHeight: '16px', opacity: 0.8 }}>
                                  {dayOfWeek}
                                </div>
                                <div style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'var(--font-weight-medium)' }}>
                                  {day}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-foreground mb-3" style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'var(--font-weight-normal)' }}>Выберите количество билетов</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-3 max-[420px]:items-start">
                          <div className="min-w-0">
                            <span className="text-foreground block" style={{ fontSize: '14px', lineHeight: '20px' }}>Взрослые</span>
                            <span className="text-muted-foreground" style={{ fontSize: '12px', lineHeight: '16px' }}>1 000 ₽ за билет</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => setPoolAdultCount(Math.max(0, poolAdultCount - 1))}
                              disabled={poolAdultCount === 0}
                              className="w-9 h-9 rounded-[var(--radius-button)] bg-[#d9e9ff] hover:bg-[#c5deff] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                            >
                              <span className="text-primary" style={{ fontSize: '20px', lineHeight: '1' }}>−</span>
                            </button>
                            <span className="text-foreground w-8 text-center" style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'var(--font-weight-medium)' }}>
                              {poolAdultCount}
                            </span>
                            <button
                              onClick={() => setPoolAdultCount(Math.min(MAX_ADULTS, poolAdultCount + 1))}
                              disabled={poolAdultCount === MAX_ADULTS}
                              className="w-9 h-9 rounded-[var(--radius-button)] bg-[#d9e9ff] hover:bg-[#c5deff] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                            >
                              <span className="text-primary" style={{ fontSize: '20px', lineHeight: '1' }}>+</span>
                            </button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between gap-3 max-[420px]:items-start">
                          <div className="min-w-0">
                            <span className="text-foreground block" style={{ fontSize: '14px', lineHeight: '20px' }}>Дети</span>
                            <span className="text-muted-foreground" style={{ fontSize: '12px', lineHeight: '16px' }}>500 ₽ за билет</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => setPoolChildCount(Math.max(0, poolChildCount - 1))}
                              disabled={poolChildCount === 0}
                              className="w-9 h-9 rounded-[var(--radius-button)] bg-[#d9e9ff] hover:bg-[#c5deff] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                            >
                              <span className="text-primary" style={{ fontSize: '20px', lineHeight: '1' }}>−</span>
                            </button>
                            <span className="text-foreground w-8 text-center" style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'var(--font-weight-medium)' }}>
                              {poolChildCount}
                            </span>
                            <button
                              onClick={() => setPoolChildCount(Math.min(MAX_CHILDREN, poolChildCount + 1))}
                              disabled={poolChildCount === MAX_CHILDREN}
                              className="w-9 h-9 rounded-[var(--radius-button)] bg-[#d9e9ff] hover:bg-[#c5deff] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                            >
                              <span className="text-primary" style={{ fontSize: '20px', lineHeight: '1' }}>+</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Footer */}
        <div className="px-4 py-4 sm:px-6 border-t border-border bg-card flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sticky bottom-0">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Calendar size={20} className="text-muted-foreground" />
            <span className="text-foreground" style={{ fontSize: '14px', lineHeight: '20px', fontWeight: 'var(--font-weight-normal)' }}>
              {priceDetails}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 w-full sm:w-auto">
            <div className="text-left sm:text-right">
              <span className="tl-price text-foreground" style={{ fontSize: '24px', lineHeight: '32px', fontWeight: 'var(--font-weight-normal)' }}>
                {finalPrice.toLocaleString('ru-RU')} ₽
              </span>
            </div>
            <button
              onClick={handleSave}
              disabled={!canSave}
              className="tl-primary-button w-full sm:w-auto px-5 py-[10px] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'var(--font-weight-normal)' }}
            >
              {(() => {
                // For breakfast (per_guest)
                if (service.configType === 'per_guest') {
                  if ((adultCount + childCount === 0) && (existingConfig || isEditing)) {
                    return 'Удалить из корзины';
                  }
                  return editingExistingId !== null || isEditing ? 'Сохранить' : 'Добавить в корзину';
                }
                // For other services (banya, spa, pool)
                return editingExistingId !== null || isEditing ? 'Сохранить' : (existingItems.length > 0 ? 'Добавить еще' : 'Добавить в корзину');
              })()}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
