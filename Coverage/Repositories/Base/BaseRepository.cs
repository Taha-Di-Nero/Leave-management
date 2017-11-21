using System;
using System.Linq;
using System.Collections.Generic;

using Seac.Coverage.Models;
using Seac.Coverage.Models.Context;

namespace Seac.Coverage.Repositories.Base
{
    public abstract class BaseRepository<T> : IRepository<T> where T : BaseEntity
    {
        public DomainContext Context { get; set; }

        protected BaseRepository(DomainContext context)
        {
            Context = context;
        }

        public void Insert(T entity)
        {
            if (entity == null)
                throw new ArgumentException("entity is null");

            Context.Set<T>().Add(entity);
            Context.SaveChanges();
        }

        public void InsertAll(IEnumerable<T> entities)
        {
            Context.Set<T>().AddRange(entities);
            Context.SaveChanges();
        }

        public void Update(T entity)
        {
            if (entity == null)
                throw new ArgumentException("entity is null");
            Context.Set<T>().Update(entity);
            Context.SaveChanges();
        }

        public void UpdateAll(IEnumerable<T> entities)
        {
            Context.Set<T>().UpdateRange(entities);
            Context.SaveChanges();
        }

        public void Delete(T entity)
        {
            Context.Set<T>().Remove(entity);
            Context.SaveChanges();
        }

        public void DeleteAll(IEnumerable<T> entities)
        {
            Context.Set<T>().RemoveRange(entities);
            Context.SaveChanges();
        }

        public T Get(long id)
        {
            return Context.Set<T>().Where(e => e.Id == id).SingleOrDefault();
        }

        public IEnumerable<T> GetAll()
        {
            return Context.Set<T>().ToList();
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            Context.Dispose();
        }
    }
}
